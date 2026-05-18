import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-gray-100 p-5'>
            <ul className='flex gap-4'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/all-pets">All Pets</Link></li>
                <li><Link href="/my-requests">My Requests</Link></li>
                <li><Link href="/add-pet">Add Pet</Link></li>
            </ul>

            <div>
                <h2 className='font-bold text-4xl text-blue-500'>Petra</h2>
            </div>

            <ul className='flex gap-4'>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Signup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;