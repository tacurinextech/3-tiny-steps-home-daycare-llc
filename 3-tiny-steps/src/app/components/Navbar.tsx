"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
// import Image from "next/image"
import { config } from "../config/constants"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Custom scroll handling for smooth scrolling with header offset
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
//     e.preventDefault()
//     closeMobileMenu()

//     const targetElement = document.getElementById(targetId)
//     if (targetElement) {
//       const headerOffset = 64 // Adjust this value based on your header height
//       const elementPosition = targetElement.getBoundingClientRect().top
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       })

//       // Update URL without scrolling
//       window.history.pushState(null, "", `#${targetId}`)
//     }
//   }
  return (
    <header
      className={`sticky top-0 z-40 w-full border-b ${
        mobileMenuOpen
          ? "bg-white dark:bg-gray-950"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:border-gray-800"
      }`}
    >
      <div className="container dark:bg-slate-900 max-w-7xl mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-2">
            <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-meadow "
            // onClick={(e) => handleNavClick(e, "top")}

            >
            {/* <Image src="/logo2.jpg.png?height=550&width=750" alt={`${config.COMPANY.ALIAS} Logo`} width={40} height={40} className="h-10 w-10" /> */}
            <span>{config.COMPANY.ALIAS}</span>
            </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-semibold hover:text-primary transition-colors ${
                isActive("/") ? "text-primary" : ""
            }`}
            // onClick={(e) => handleNavClick(e, "services")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-semibold hover:text-primary transition-colors ${
                isActive("/about") ? "text-primary" : ""
            }`}
            // onClick={(e) => handleNavClick(e, "about")}
          >
            About Us
          </Link>
          <Link
            href="/programs"
            className={`text-sm font-semibold hover:text-primary transition-colors ${
                isActive("/programs") ? "text-primary" : ""
            }`}
            // onClick={(e) => handleNavClick(e, "programs")}
          >
            Programs
          </Link>
          <Link
            href="/gallery"
            className={`text-sm font-semibold hover:text-primary transition-colors ${
                isActive("/gallery") ? "text-primary" : ""
            }`}
            // onClick={(e) => handleNavClick(e, "gallery")}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-semibold hover:text-primary transition-colors ${
                isActive("/contact") ? "text-primary" : ""
            }`}
            // onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className={`hidden md:flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-white hover:bg-primary/90 transition-colors${
                isActive("/contact") ? "text-primary" : ""
            }`}
        //   onClick={(e) => handleNavClick(e, "contact")}
        >
          Enroll Now
        </Link>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex md:hidden items-center justify-center rounded-md border border-gray-200 p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={closeMobileMenu}>
            <div
              className="fixed inset-y-0 left-0 w-[300px] sm:w-[400px] bg-white dark:bg-gray-950 p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-xl"
                //   onClick={(e) => handleNavClick(e, "top")}
                  onClick={closeMobileMenu}
                >
                  <span>{config.COMPANY.ALIAS}</span>
                </Link>
                <button onClick={closeMobileMenu} className="rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-base font-semibold hover:text-primary transition-colors"
                //   onClick={(e) => handleNavClick(e, "services")}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-base font-semibold hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  href="/programs"
                  className="text-base font-semibold hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Programs
                </Link>
                <Link
                  href="/gallery"
                  className="text-base font-semibold hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-semibold hover:text-primary transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Enroll Now
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
