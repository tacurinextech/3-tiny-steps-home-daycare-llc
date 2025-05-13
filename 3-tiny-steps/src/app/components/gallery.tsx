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
    { id: 1, src: "/placeholder.svg?height=550&width=750", alt: "Children playing with blocks", category: "activities" },
    { id: 2, src: "/placeholder.svg?height=550&width=750", alt: "Art and craft session", category: "activities" },
    { id: 3, src: "/placeholder.svg?height=550&width=750", alt: "Outdoor playground", category: "facility" },
    { id: 4, src: "/placeholder.svg?height=550&width=750", alt: "Reading corner", category: "facility" },
    { id: 5, src: "/placeholder.svg?height=550&width=750", alt: "Children during circle time", category: "activities" },
    { id: 6, src: "/placeholder.svg?height=550&width=750", alt: "Nap time area", category: "facility" },
    { id: 7, src: "/placeholder.svg?height=550&width=750", alt: "Children playing outside", category: "activities" },
    { id: 8, src: "/placeholder.svg?height=550&width=750", alt: "Lunch time", category: "activities" },
    { id: 9, src: "/placeholder.svg?height=550&width=750", alt: "Daycare entrance", category: "facility" },
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
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 hover:bg-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl">
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
