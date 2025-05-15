import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import { programs, schedule, plans } from "@/lib/data"
import { programs, schedule, plans } from "../lib/data"

export default function ProgramsPage() {
  return (
    <>
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary">Our Programs</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {`We offer age-appropriate programs designed to nurture each child's development at their own pace.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="relative h-48">
                  <Image 
                  src={program.image || "/placeholder.svg"} 
                // src="/placeholder?height=550&width=750"
                  alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{program.age}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Daily Schedule</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {`Our balanced daily routine provides structure while allowing flexibility for children's individual needs.`}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-24 flex-shrink-0 text-right">
                      <span className="font-medium text-primary">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l-2 border-primary/20 pl-4 pb-6">
                      <h3 className="font-medium dark:text-white">{item.activity}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Meals & Nutrition</h2>
              <p className="text-gray-600 mb-4">
                {`We provide nutritious, home-cooked meals and snacks that support children's growth and development. Our
                menu is designed to introduce children to a variety of healthy foods.`}
              </p>
              <h3 className="text-xl font-medium text-primary mt-6 mb-3">Sample Menu</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Breakfast</h4>
                  <p className="text-gray-600">Whole grain cereal, fresh fruit, and milk</p>
                </div>
                <div>
                  <h4 className="font-medium">Morning Snack</h4>
                  <p className="text-gray-600">Apple slices with yogurt dip</p>
                </div>
                <div>
                  <h4 className="font-medium">Lunch</h4>
                  <p className="text-gray-600">
                    Turkey and cheese sandwich on whole wheat bread, carrot sticks, and applesauce
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Afternoon Snack</h4>
                  <p className="text-gray-600">Hummus with whole grain crackers and cucumber slices</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {`*We accommodate food allergies and dietary restrictions. Please discuss your child's needs with us.`}
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
              src="/placeholder.svg?height=550&width=750"
              alt="Healthy meals for children" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-primary/5 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Enrollment & Fees</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {`We offer flexible enrollment options to meet your family's needs.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-700 rounded-lg shadow-sm ${index === 1 ? "border-primary border-2" : "border border-gray-200 dark:border-gray-600"}`}
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-center py-1 text-sm font-medium">Most Popular</div>
                )}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-medium dark:text-white">{plan.title}</h3>
                    {/* <div className="mt-2">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-gray-500">/week</span>
                    </div> */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{plan.schedule}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center rounded-md ${
                      index === 1
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border border-primary text-primary hover:bg-primary/10"
                    } px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors`}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>*One-time registration fee of $100 applies to all new enrollments</p>
            <p>*10% sibling discount available for families with multiple children</p>
          </div>
        </div>
      </section>
    </>
  )
}
