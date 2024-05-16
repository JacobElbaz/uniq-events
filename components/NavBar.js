"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import uniq from "@/assets/images/uniq.png";
import burger from "@/assets/icons/menu.png";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <Link href={'/'} style={{display: 'flex', alignItems: 'center'}}>
        <Image height={50} src={uniq} alt="uniq"></Image>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/nos-offres"}>Nos offres</Link>
        </li>
        <li>
          <Link href={"#contact"}>Nous contacter</Link>
        </li>
      </ul>
      <div className="burger-menu">
        <button className="burger-button" onClick={handleToggleMenu}>
          <Image src={burger} alt="burger" height={30} />
        </button>
        <ul className={isOpen ? "menu-links" : "menu-links hidden"}>
          <li>
            <Link href={"/"} onClick={handleToggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/nos-offres"} onClick={handleToggleMenu}>
              Nos offres
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={handleToggleMenu}>
              Nous contacter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
