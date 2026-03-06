"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ currentPage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", page: "home" },
    { label: "Group Trips", href: "/#group-trips", page: null },
    { label: "Customized Trips", href: "/#customized-trips", page: null },
    { label: "Payments", href: "/payments", page: "payments" },
    { label: "About Us", href: "/about", page: "about" },
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="https://owf-website-content.s3.ap-south-1.amazonaws.com/HomePage/logo.png"
            alt="OWF Trips"
            width={120}
            height={46}
            priority
          />
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
        <nav
          id="site-nav"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={currentPage === item.page ? "nav-active" : ""}
              aria-current={currentPage === item.page ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
