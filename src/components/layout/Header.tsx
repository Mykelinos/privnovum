"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md border-b tag-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
          NOVUM
          <span className="tag-label ml-2 text-accent">Store</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 flex items-center justify-center transition-transform hover:scale-110"
        >
          <ShoppingCart size={24} />
          {cartItemsCount > 0 && (
            <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              {cartItemsCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b tag-border py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-medium uppercase ${
                pathname === link.href ? "text-white" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

