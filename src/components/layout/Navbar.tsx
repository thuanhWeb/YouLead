"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-gold">
            You Lead Coaching
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button render={<Link href="/contact" />}>
            Book a Discovery Call
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
                  <span className="font-heading text-lg font-bold text-gold">
                    You Lead Coaching
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <SheetClose
                      key={href}
                      render={
                        <Link
                          href={href}
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
                  <SheetClose render={<Link href="/contact" />}>
                    <Button className="w-full">
                      Book a Discovery Call
                    </Button>
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
