'use client'
import { CheckCircle, Clock, Heart, Star } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { config } from "./config/constants";
import { testimonials } from "./lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 z-10" />
          <div className="relative h-[500px] w-full">
            <Image src="/placeholder.svg?height=550&width=750" alt="Happy children playing" fill className="object-cover" priority />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container max-w-7xl mx-auto px-8">
              <div className="max-w-lg space-y-4 bg-white/80 dark:bg-gray-800/90 p-6 rounded-lg backdrop-blur-sm">
                <h1 className="text-4xl font-bold tracking-tight text-primary dark:text-primary">{config.COMPANY.NAME}</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Nurturing young minds in a safe, loving environment where every child can learn, play, and grow.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-md bg-primary dark:bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 dark:hover:bg-primary/90 transition-colors"
                  >
                    Schedule a Tour
                  </Link>
                  <Link
                    href="/programs"
                    className="flex items-center justify-center rounded-md bg-white dark:bg-gray-700 px-6 py-3 text-sm font-bold text-black dark:text-white border border-primary/60 dark:border-primary/60 hover:bg-white/30 dark:hover:bg-gray-600 transition-colors"
                  >
                    Our Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-16 bg-slate-50 dark:bg-gray-800">
            <div className="container max-w-7xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary dark:text-primary">Why Choose Us?</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  At 3 Tiny Steps, we provide more than just childcare. We create a foundation for lifelong learning.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Heart className="h-12 w-12 text-primary dark:text-primary mb-2" />
                    <h3 className="text-xl font-medium dark:text-white">Loving Environment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We create a nurturing atmosphere where children feel safe, loved, and encouraged to explore.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Star className="h-12 w-12 text-primary dark:text-primary mb-2" />
                    <h3 className="text-xl font-medium dark:text-white">Quality Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our play-based curriculum is designed to develop cognitive, social, and emotional skills.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <CheckCircle className="h-12 w-12 text-primary dark:text-primary mb-2" />
                    <h3 className="text-xl font-medium dark:text-white">Certified Staff</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Our experienced caregivers are trained in early childhood education and first aid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-white dark:bg-gray-900">
            <div className="container max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-primary dark:text-primary mb-4">A Day at 3 Tiny Steps</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Every day is filled with fun, learning, and growth. Our structured yet flexible schedule ensures
                    children have a balanced day of activities.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-primary dark:text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium dark:text-white">Morning Circle Time</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Songs, stories, and daily introduction</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-primary dark:text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium dark:text-white">Learning Activities</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Age-appropriate educational play</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-primary dark:text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium dark:text-white">Outdoor Exploration</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Nature walks and playground time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-primary dark:text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium dark:text-white">Rest & Quiet Time</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Naps and peaceful activities</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="/programs#schedule"
                    className="mt-6 inline-flex items-center justify-center rounded-md bg-primary dark:bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 dark:hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                  >
                    View Full Schedule
                  </Link>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Children engaged in activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 bg-primary/5 dark:bg-gray-800">
            <div className="container max-w-7xl mx-auto px-8 text-center">
              <h2 className="text-3xl font-bold text-primary dark:text-primary mb-8">What Parents Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic">{`"${testimonial.text}"`}</p>
                      <p className="font-medium dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Parent of {testimonial.child}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}