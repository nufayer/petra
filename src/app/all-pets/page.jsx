import PetCard from "@/components/PetCard";

const AllPetPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`);
    const pets = await res.json();

    console.log(pets);
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold my-5">All Pets</h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                { 
                    pets.map(pet => <PetCard key={pet._id} pet={pet} />)
                }
            

            </div>
        </div>
    );
};

export default AllPetPage;