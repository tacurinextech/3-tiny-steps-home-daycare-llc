import { Clock, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { config } from "../config/constants"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpg.png?height=550&width=750" alt={`${config.COMPANY.ALIAS} Logo`} width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold">{config.COMPANY.ALIAS}</span>
            </div>
            <p className="text-slate-300">
              Nurturing young minds in a safe, loving environment where every child can learn, play, and grow.
            </p>
            <div className="mt-4 flex items-center gap-4">
                <Link href="https://www.facebook.com/3TinyStepsHomeDaycare?mibextid=wwXIfr" target="_blank" className="text-gray-500 hover:text-blue-800 dark:text-gray-400">
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
                    className="h-5 w-5"
                    >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/3tinystepsnorwalk?igsh=NTc4MTIwNjQ2YQ==" target="_blank" className="text-gray-500 hover:text-blue-800 dark:text-gray-400">
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
                    className="h-5 w-5"
                    >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white">
                  Infant Care
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white">
                  Toddler Program
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-white">
                  Preschool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <Link href='https://maps.apple.com/place?place-id=I3571AA3901BC83CB&_provider=9902' target="_blank">
                  <span className="text-slate-300">{config.COMPANY.ADDRESS}</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href={`tel:${config.COMPANY.PHONE}`}>
                  <span className="text-slate-300">{config.COMPANY.PHONE}</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="/contact">
                  <span className="text-slate-300">{config.COMPANY.EMAIL}</span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-slate-300">{config.COMPANY.HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} {config.COMPANY.NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
