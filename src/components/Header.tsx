"use client";

import {
  MenuIcon,
  CrossIcon,
  ChevronDownIcon,
  HomeIcon,
  SendHorizonalIcon,
  MessageSquareIcon,
  LucideIcon,
  PlayCircleIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

const products: {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Book a Stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: SendHorizonalIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: MessageSquareIcon,
  },
];

const callsToAction: { name: string; href: string; icon: LucideIcon }[] = [
  {
    name: "See Demo Booking",
    href: "#",
    icon: PlayCircleIcon,
  },
  { name: "Contact Support", href: "#", icon: PhoneIcon },
];

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
          <Button
            className="-m-2 5 inline-flex items-center justify-center rounded-md p-2 5 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open Main Menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex items-center lg:gap-x-12">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="flex items-center gap-x-1 header-item hover:bg-transparent hover:text-white"
                variant={"ghost"}
              >
                Stays{" "}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-white"
                  aria-hidden="true"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 space-y-[3px] p-0">
              <div className="p-4">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                      <product.icon
                        className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={product.href}
                        className="block font-semibold text-[#013B94]"
                      >
                        {product.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-[#013B94]">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#013B94] hover:bg-gray-100"
                  >
                    <action.icon
                      className="h-5 w-5 flex-none text-[#013B94]"
                      aria-hidden="true"
                    />
                    {action.name}
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <a href="#" className="header-item">
            Flights
          </a>
          <a href="#" className="header-item">
            Car Rentals
          </a>
          <a href="#" className="header-item">
            Attractions
          </a>
          <a href="#" className="header-item">
            Flight + Hotel
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
