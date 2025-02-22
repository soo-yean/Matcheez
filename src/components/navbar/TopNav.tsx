"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import Link from "next/link";
import { PiCheeseFill } from "react-icons/pi";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      // className="bg-gradient-to-r from-stone-50 to-stone-300"
      classNames={{
        item: ["font-bold", "text-xl", "uppercase"],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <PiCheeseFill size={40} className="text-yellow-400 mr-2" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Matcheez</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem as={Link} href="/members">
          Matches
        </NavbarItem>
        <NavbarItem as={Link} href="/lists">
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Messages
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          variant="bordered"
          className="font-bold text-gray-900 border-yellow-400"
        >
          Login
        </Button>
        <Button
          variant="bordered"
          className="font-bold text-gray-900 border-yellow-400"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
