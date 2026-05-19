import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetDeatils = async ({params}) => {
    const {id} = await params;

    const res = await fetch(`http://localhost:5000/pet/${id}`);
    const pet = await res.json();

    const {imageUrl, petName, species, location, adoptionFee, gender, age, breed, healthStatus, vaccinationStatus, description, ownerEmail} = pet;

    
   console.log(pet);
    return (
        <div className='max-w-7xl mx-auto'>
            <Image
            alt={petName}
            src={imageUrl}
            width={700}
            height={900}
            className="rounded-2xl object-cover"
            />

            <div className="p-3">
                <div className="flex items-center gap-2"><h2 className="font-bold">Name: {petName}</h2></div>
                <div>{species}</div>
                <div>{location}</div>
                <div>{gender}</div>
                <div>Age: {age}</div>
                <div>Breed: {breed}</div>
                <div>Health Status: {healthStatus}</div>
                <div>Vaccination Status: {vaccinationStatus}</div>
                <div>Description: {description}</div>
                <div>Adoption Fee: BDT{adoptionFee}</div>
                <div>Contact Owner: {ownerEmail}</div>
            </div>
        </div>
    );
};

export default PetDeatils;