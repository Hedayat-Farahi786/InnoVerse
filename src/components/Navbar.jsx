'use client';

import { Dropdown, Navbar as Nav } from 'flowbite-react';
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <Nav
      fluid
      rounded
      className='py-5 w-11/12 mx-auto'
    >
      <Nav.Brand href="https://flowbite-react.com">
        <img
          alt="Flowbite React Logo"
          className="h-8 sm:h-12"
          src={logo}
        />
      </Nav.Brand>
      <div className="hidden md:flex md:order-2">
      <Dropdown
      inline
      label="EN"
    >
      <Dropdown.Item>
        DE
      </Dropdown.Item>
    </Dropdown>
      </div>
        <Nav.Toggle />
      <Nav.Collapse>
        <Nav.Link className='text-base'
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Nav.Link>
        <Nav.Link className='text-base' href="#">
          Services
        </Nav.Link>
        <Nav.Link className='text-base' href="#about">
          About
        </Nav.Link>
        <Nav.Link className='text-base' href="#">
          Testimonials
        </Nav.Link>
        <Nav.Link className='text-base' href="#">
          Contact
        </Nav.Link>
      </Nav.Collapse>
    </Nav>
  )
}


