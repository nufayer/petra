"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { data: session, } = authClient.useSession() 
    const user = session?.user;
    console.log({user});

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className='flex justify-between bg-gray-100 p-5'>
            <ul className='flex gap-4 font-bold text-gray-700'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/all-pets">All Pets</Link></li>
                <li><Link href="/my-adoptions">My Adoptions</Link></li>
                <li><Link href="/add-pet">Add Pet</Link></li>
            </ul>

            <div>
                <h2 className='font-bold text-4xl text-blue-500'>PetRa</h2>
            </div>

            <ul className='flex items-center gap-4 font-bold text-gray-700'>
                <li><Link href="/profile">Profile</Link></li>

             { user ? <>
             <li>
                 <Avatar>
                        <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                 </Avatar>
             </li>
             <li>
                <Button onClick={handleSignOut} className="rounded-none bg-red-800" >Logout</Button>
             </li>
             </> : <>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Signup</Link></li>
             </>}   
            </ul>
        </nav>
    );
};

export default Navbar;