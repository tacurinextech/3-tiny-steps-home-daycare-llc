import Gallery from "../components/gallery"

export default function GalleryPage() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-gray-800">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">Our Gallery</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a peek inside our daycare and see the fun activities and spaces where your child will learn and grow.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  )
}
