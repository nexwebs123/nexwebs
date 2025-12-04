"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, Dispatch, SetStateAction } from "react";
import { ModeToggle } from "../theme/theme-button";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

// Component for right-side nav actions that conditionally shows Get Started button
function RightNavActions({
  visible,
  setIsMobileMenuOpen,
}: {
  visible?: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center gap-3">
      <AnimatePresence>
        {!visible && (
          <motion.div
            initial={{ opacity: 0, width: 0, x: -10 }}
            animate={{ opacity: 1, width: "auto", x: 0 }}
            exit={{ opacity: 0, width: 0, x: -10 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 35,
            }}
            className="overflow-hidden"
          >
            <NavbarButton variant="primary" href="/#contact">
              Get Started
            </NavbarButton>
          </motion.div>
        )}
      </AnimatePresence>
      <NavbarButton variant="secondary">
        <ModeToggle setMobileMenu={setIsMobileMenuOpen} />
      </NavbarButton>
    </div>
  );
}

export function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Services",
      link: "/#services",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Testimonials",
      link: "/#testimonials",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full mt-4">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <RightNavActions setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-0">
              <NavbarButton variant="secondary">
                <ModeToggle setMobileMenu={setIsMobileMenuOpen} />
              </NavbarButton>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/#contact"
              >
                Get started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
