"use client";

import { Button, Card} from '@heroui/react';
import React, {use, useState} from 'react';
import { DateField, Label  } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const AdoptCard = ({ pet }) => {

        const { data: session, } = authClient.useSession() 
        const user = session?.user;
        

    const [adoptionDate, setAdoptionDate, imageUrl] = useState(null); 
    
    const { adoptionFee, _id, petName } = pet;

const handleAdopt = async () => {
    const adoptionData = {
        userId: user?.id,
        userName: user?.name,
        userEmail: user?.email,
        userImage: user?.image,
        petId: _id,
        petName: petName,
        adoptionFee: adoptionFee,
        adoptionDate: new Date(adoptionDate),
        imageUrl: pet.imageUrl, 
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adoptionData)
    });

    const data = await res.json();

    toast.success("Your adoption request has been submitted successfully!");
};

           
    
    

    return (
        <Card className='rounded-none border-2 mt-10 p-10'>
            <h2 className='font-bold'>Adoption Fee: BDT {adoptionFee}</h2>
            <DateField onChange={setAdoptionDate} className={'w-full'} name = "date">
                <Label>Preferred Adoption Date</Label>
                <DateField.Group>
                    <DateField.Input>
                        {(segment)=> <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>
            <Button onClick={handleAdopt} className='mt-4 w-full'>Adopt Now</Button>
        </Card>
    );
};

export default AdoptCard;