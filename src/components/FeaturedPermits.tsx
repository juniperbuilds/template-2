const featuredPermits = [
  { id: 1, title: 'Yosemite Camping', date: '2023-07-15', type: 'Camping', location: 'Yosemite National Park' },
  { id: 2, title: 'Grand Canyon Hiking', date: '2023-08-01', type: 'Hiking', location: 'Grand Canyon National Park' },
  // Add more featured permits as needed
]

export default function FeaturedPermits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0d2600]">Featured Permits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPermits.map((permit) => (
            <div key={permit.id} className="bg-[#ddd3c9] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#0d2600]">{permit.title}</h3>
              <p className="text-[#0d2600] mb-1">Date: {permit.date}</p>
              <p className="text-[#0d2600] mb-1">Type: {permit.type}</p>
              <p className="text-[#0d2600]">{permit.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}