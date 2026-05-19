import Image from "next/image";

const PetCard = ({ pet }) => {
    const {imageUrl, petName, species, location, adoptionFee} = pet;
    
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
                <div className="flex items-center gap-2"><h2 className="font-bold">{petName}</h2></div>
                <div>{species}</div>
                <div>{location}</div>
                <div>Adoption Fee: BDT{adoptionFee}</div>
            </div>
        </div>
    );
};

export default PetCard;