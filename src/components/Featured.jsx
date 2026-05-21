import PetCard from "@/components/PetCard";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const featuredPets = await res.json();
    console.log({featuredPets})
    return (
        <div className="my-20">
            <div>
                <h1 className="text-3xl font-bold mb-4 text-blue-500 max-w-7xl mx-auto">Featured Pets</h1>
            </div>

            <div className="grid grid-cols-4 mt-10 gap-5 max-w-7xl mx-auto">
                {featuredPets.map((pet) => <PetCard key={pet._id} pet={pet} />)}
            </div>
        </div>
       
    );
};

export default Featured;