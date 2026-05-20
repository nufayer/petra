import { AdoptionCancelAlert } from '@/components/AdoptionCancelAlert';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyAdoptionPage = async () => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

const user = session?.user;

console.log(user);
const res = await fetch(`http://localhost:5000/adoption/${user?.id}`);

const adoptions = await res.json();
console.log(adoptions);
    
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold text-blue-500'>My Adoptions</h1>
            <div>
                {
                    adoptions.map((adoption) => <div key={adoption._id}>

                        <Image src={adoption.imageUrl} alt={adoption.petName} width={400} height={300} />     
                        <div>
                            <h2>{adoption.petName}</h2>
                            <p>
                                {new Date(adoption.adoptionDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <p>Adoption ID: {adoption._id}</p>
                            <p className='text-xl font-bold'>BDT{adoption.adoptionFee}</p>
                        </div> 

                        <AdoptionCancelAlert adoptionId={adoption._id} />            
            </div>)
                }
        </div>
        </div>
    );
};

export default MyAdoptionPage;