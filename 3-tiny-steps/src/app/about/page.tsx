import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { team } from "../lib/data"
import { config } from "../config/constants"

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=550&width=750" alt="Our daycare facility" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">About {config.COMPANY.ALIAS}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {`Founded in 2015, ${config.COMPANY.NAME} was born from a passion for early childhood development
                and a desire to provide families with quality childcare in a home-like setting.`}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our founder, Libia Brito, a certified early childhood educator with over 15 years of experience,
                created {config.COMPANY.ALIAS} with a vision to combine the warmth of home-based care with structured learning
                opportunities.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {`Today, we're proud to be a trusted part of our community, helping children take their first steps toward
                a lifetime of learning and growth.`}
              </p>
              <h3 className="text-xl font-medium text-primary mt-6 mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide a safe, nurturing environment where children can develop socially, emotionally, physically,
                and intellectually at their own pace while building confidence and a love for learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-2">
                    <Image 
                    // src={member.image || "/placeholder.svg"} 
                    src="/placeholder.svg?height=550&width=750"
                    alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-medium dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Facility</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {`Our home daycare is designed with children's safety, comfort, and development in mind. We've created
                distinct areas for different activities while maintaining a cozy, home-like atmosphere.`}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium dark:text-white">Safe & Secure</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Childproofed spaces with secure entry system</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Learning Centers</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Dedicated areas for art, reading, and imaginative play</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Outdoor Space</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{`Fenced playground with age-appropriate equipment`}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Rest Area</span>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Quiet, comfortable space for naps and downtime</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=550&width=750" alt="Play area" fill className="object-cover" />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=550&width=750" alt="Reading corner" fill className="object-cover" />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=550&width=750" alt="Outdoor playground" fill className="object-cover" />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=550&width=750" alt="Nap area" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
