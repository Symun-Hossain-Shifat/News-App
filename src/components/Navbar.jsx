"use client";

import Link from "next/link";
import React, { useState } from "react";
import userimage from '@/assets/user.png'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

function Navbarpage() {
  const [btn, setBtn] = useState("home");

  const { data: session , isPending} = authClient.useSession();
 if(isPending) return null;
  const Data = session?.user?.name;
  console.log(Data)
  console.log(session)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sticky top-0 z-50 bg-white items-center container mx-auto shadow-sm px-4">
      
      {/* Left */}
      <div></div>

      {/* Center Menu */}
      <div className="flex gap-3 justify-center my-5 font-bold items-center text-gray-700">
        <Link
          className={btn === "home" ? "border-b-2 border-purple-600" : ""}
          onClick={() => setBtn("home")}
          href="/"
        >
          Home
        </Link>

        <Link
          className={btn === "about" ? "border-b-2 border-purple-600" : ""}
          onClick={() => setBtn("about")}
          href="/About"
        >
          About
        </Link>

        <Link
          className={btn === "career" ? "border-b-2 border-purple-600" : ""}
          onClick={() => setBtn("career")}
          href="/career"
        >
          Career
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex justify-center md:justify-end gap-2 mr-3 items-center">
        {session?.user ? (
          <>
             <Avatar>
       
        <Avatar.Fallback>  <span className="text-2xl">HI { Data.toUpperCase() } </span></Avatar.Fallback>
      </Avatar>

           
            <button className="bg-black py-3 px-8 btn text-white " onClick={async () => await authClient.signOut()}>Logout</button>
          </>
        ) : (
          <>
            <Image
              src={userimage}
              alt="guest"
              width={45}
              height={45}
              className="rounded-full"
            />

            <Link href="/signin">
              <button className="bg-black py-3 px-8 btn text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbarpage;