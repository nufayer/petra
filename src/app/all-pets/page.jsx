"use client";

import { useEffect, useState } from "react";
import PetCard from "@/components/PetCard";
import {Spinner} from "@heroui/react";

const AllPetPage = () => {
    const [pets, setPets] = useState([]);
    const [search, setSearch] = useState("");
    const [species, setSpecies] = useState("All");

    useEffect(() => {
        const fetchPets = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet`);
            const data = await res.json();
            setPets(data);
        };

        fetchPets();
    }, []);

    // 🔎 FILTER LOGIC
    const filteredPets = pets.filter((pet) => {
        const matchName = pet.petName
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchSpecies =
            species === "All" || pet.species === species;

        return matchName && matchSpecies;
    });

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-blue-900 my-5">All Pets 🐾</h1>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                
                {/* Search */}
                <input
                    type="text"
                    placeholder="Search pets by name..."
                    className="border p-2 rounded w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Filter */}
                <select
                    className="border p-2 rounded w-full md:w-48"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                >
                    <option value="All">All Species</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Fish">Fish</option>
                    <option value="Bird">Bird</option>
                </select>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredPets.length > 0 ? (
                    filteredPets.map((pet) => (
                        <PetCard key={pet._id} pet={pet} />
                    ))
                ) : (
      <div className="flex flex-col items-center gap-2 mx-auto">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading pets...</span>
      </div>
                )}
            </div>
        </div>
    );
};

export default AllPetPage;