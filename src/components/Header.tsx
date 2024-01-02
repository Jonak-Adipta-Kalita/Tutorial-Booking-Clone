"use client";

import { MenuIcon, CrossIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img src="/logo.png" alt="logo" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2 5 inline-flex items-center justify-center rounded-md p-2 5 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
