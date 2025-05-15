"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/img/facility_1.jpg", alt: "Fire extinguisher", category: "facility" },
    { id: 2, src: "/img/activities_1.jpg", alt: "Reading book to child", category: "activities" },
    { id: 3, src: "/img/facility_2.jpg", alt: "Toys and games", category: "facility" },
    { id: 4, src: "/img/activities_2.jpg", alt: "Children drawing on white board", category: "activities" },
    { id: 5, src: "/img/facility_3.jpg", alt: "Toys, child sofa, and alphabet carpet", category: "facility" },
    { id: 6, src: "/img/activities_3.jpg", alt: "Children playing", category: "activities" },
    { id: 7, src: "/img/facility_4.jpg", alt: "Toys and books", category: "facility" },
    { id: 8, src: "/img/activities_4.jpg", alt: "Toddler crawling", category: "activities" },
    { id: 9, src: "/img/facility_5.jpg", alt: "Totes on hooks", category: "facility" },
    { id: 10, src: "/img/activities_5.jpg", alt: "toddler playing with blocks", category: "activities" },
    { id: 11, src: "/img/facility_6.jpg", alt: "Number Carpet", category: "facility" },
    { id: 12, src: "/img/activities_6.jpg", alt: "Toddler drawing", category: "activities" },
    { id: 13, src: "/img/facility_7.jpg", alt: "Alphabet board", category: "facility" },
    { id: 14, src: "/img/activities_7.jpg", alt: "Toddler reading", category: "activities" },
    { id: 15, src: "/img/facility_8.jpg", alt: "Toy cards", category: "facility" },
    { id: 16, src: "/img/activities_8.jpg", alt: "Thanksgiving cards made by children", category: "activities" },
    { id: 17, src: "/img/activities_9.jpg", alt: "Toddler making Thanksgiving card", category: "activities" },
    { id: 18, src: "/img/activities_10.jpg", alt: "Children reading", category: "activities" },
    { id: 19, src: "/img/activities_11.jpg", alt: "Children playing", category: "activities" },

  ]

  const categories = ["all", "activities", "facility"]

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:hover:bg-gray-400"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-64 w-full">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}>
          <button
            // onClick={() => setSelectedImage(null)}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the overlay click from triggering
              setSelectedImage(null);
            }}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div 
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
