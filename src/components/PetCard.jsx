import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }) => {
    const {_id, imageUrl, petName, species, location, adoptionFee} = pet;
    
    return (
        <div className="">
            <Image
                alt={petName}
                src={imageUrl}
                width={400}
                height={300}
                className="rounded-2xl object-cover"
            />

            <div className="p-3">
                <div className="flex items-center gap-2 text-blue-900"><h2 className="font-bold">{petName}</h2></div>
                <div className="text-blue-950">{species}</div>
                <div className="text-blue-950">{location}</div>
                <div className="text-blue-950">Adoption Fee: BDT{adoptionFee}</div>
            </div>
            <Link href={`/all-pets/${_id}`} className="text-blue-500 hover:underline">
                <Button className={'mt-1'}>Adopt Now</Button>
            </Link>
        </div>
    );
};

export default PetCard;