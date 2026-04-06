"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Work With Me" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    function onScroll() {
      const scrollY = window.scrollY + 120;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    },
    [],
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.svg"
            alt="You Lead Coaching"
            width={160}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            render={
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
              />
            }
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/logo.svg"
                    alt="You Lead Coaching"
                    width={140}
                    height={35}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map(({ href, label }) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <SheetClose
                      key={href}
                      render={
                        <a
                          href={href}
                          onClick={(e) => scrollTo(e, href)}
                          className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                            active
                              ? "bg-primary/10 text-gold"
                              : "text-foreground/80 hover:text-gold"
                          }`}
                        />
                      }
                    >
                      {label}
                    </SheetClose>
                  );
                })}
                <div className="mt-4 border-t pt-4">
                  <SheetClose
                    render={
                      <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, "#contact")}
                      />
                    }
                  >
                    <Button className="w-full">Book a Call</Button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
