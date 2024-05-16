"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import uniq from "@/assets/images/uniq.png";

function NavBar() {
  return (
    <div className="navbar">
      <Image height={50} src={uniq}></Image>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/nos-offres'}>Nos offres</Link>
        </li>
        <li>
          <Link href={'#contact'}>Nous contacter</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
