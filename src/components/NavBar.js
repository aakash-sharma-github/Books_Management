import React from "react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
// import logo from "../assets/books.png";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand to="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink to="#" active>
          Home
        </NavbarLink>
        <NavbarLink to="#">About</NavbarLink>
        <NavbarLink to="#">Services</NavbarLink>
        <NavbarLink to="#">Pricing</NavbarLink>
        <NavbarLink to="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

