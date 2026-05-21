"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-100 shadow-md px-5 py-4">
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="font-bold text-3xl text-blue-500">PetRa</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-bold  text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-pets">All Pets</Link></li>
          <li><Link href="/my-adoptions">My Adoptions</Link></li>
          <li><Link href="/add-pet">Add Pet</Link></li>
        </ul>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/profile" className="font-bold text-gray-700">
            Profile
          </Link>

          {user ? (
            <>
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSignOut}
                className="rounded-none bg-red-800 text-white"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 font-bold text-gray-700">
          <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="/all-pets">All Pets</Link>
          <Link onClick={() => setIsOpen(false)} href="/my-adoptions">My Adoptions</Link>
          <Link onClick={() => setIsOpen(false)} href="/add-pet">Add Pet</Link>

          <hr />

          <Link onClick={() => setIsOpen(false)} href="/profile">Profile</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>

              <Button
                onClick={handleSignOut}
                className="rounded-none bg-red-800 text-white w-full"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link onClick={() => setIsOpen(false)} href="/login">
                Login
              </Link>
              <Link onClick={() => setIsOpen(false)} href="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;