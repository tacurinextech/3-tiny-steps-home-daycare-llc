import { Clock, MapPin, Phone, Mail } from "lucide-react"
// import Image from "next/image"
import ContactForm from "../components/ContactForm"
import { faqs } from "../lib/data"
import { config } from "../config/constants"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-4">Contact Us</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {`We'd love to hear from you! Reach out with any questions about our programs or to schedule a tour of our
                facility.`}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <Link href='https://maps.apple.com/place?place-id=I3571AA3901BC83CB&_provider=9902' target="_blank">
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">{config.COMPANY.ADDRESS}</p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <Link href={`tel:${config.COMPANY.PHONE}`}>
                    <p className="text-gray-600 dark:text-gray-300">{config.COMPANY.PHONE}</p>
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">{config.COMPANY.EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">{config.COMPANY.HOURS}</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-medium text-primary mb-4">Find Us</h3>
                <div className="h-[300px] bg-slate-200 rounded-lg relative overflow-hidden">
                  {/* <Image src="/placeholder.svg?height=100&width=100" alt="Map location" fill className="object-cover" /> */}
                  {/* <div style={{width: "100%"}}><iframe width="100%" height="600"  scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(3%20Tiny%20Steps%20Home%20Daycare)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a></iframe></div> */}
                  <div className="w-full h-[300px]">
                    <iframe
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=+(3%20Tiny%20Steps%20Home%20Daycare)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                        title="3 Tiny Steps Home Daycare Location"
                        loading="lazy"
                        className="w-full h-full border-0"
                        allowFullScreen
                        aria-hidden="false"
                        // tabIndex="0"
                    ></iframe>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
              <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {`Fill out the form below and we'll get back to you as soon as possible.`}
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our daycare services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-medium text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
