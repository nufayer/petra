import { Button, Card } from '@heroui/react';
import React from 'react';

const AdoptCard = ({ pet }) => {
    const { adoptionFee } = pet;
    return (
        <Card className='rounded-none border-2 mt-10 p-10'>
            <h2 className='font-bold'>Adoption Fee: BDT {adoptionFee}</h2>
            <Button className='mt-4 w-full'>Adopt Now</Button>
        </Card>
    );
};

export default AdoptCard;