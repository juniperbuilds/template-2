"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Tag } from 'lucide-react'

interface Permit {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  type: string;
  location: string;
  listingDate: string;
}

export default function RecentlyListedPermits() {
  const [recentPermits, setRecentPermits] = useState<Permit[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    // For now, we'll simulate it with some dummy data
    const dummyData: Permit[] = [
      { id: 1, title: 'Yosemite Camping', startDate: '2023-07-15', endDate: '2023-07-20', type: 'Camping', location: 'Yosemite National Park', listingDate: '2023-06-01' },
      { id: 2, title: 'Grand Canyon Hiking', startDate: '2023-08-01', endDate: '2023-08-05', type: 'Hiking', location: 'Grand Canyon National Park', listingDate: '2023-05-30' },
      { id: 3, title: 'Yellowstone Fishing', startDate: '2023-07-20', endDate: '2023-07-25', type: 'Fishing', location: 'Yellowstone National Park', listingDate: '2023-05-29' },
    ];

    // Sort the permits by listing date, most recent first
    const sortedPermits = dummyData.sort((a, b) => 
      new Date(b.listingDate).getTime() - new Date(a.listingDate).getTime()
    );

    setRecentPermits(sortedPermits);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0d2600]">Recently Listed Permits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPermits.map((permit) => (
            <div key={permit.id} className="bg-[#ddd3c9] p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-[#0d2600]">{permit.title}</h3>
              <p className="text-[#0d2600] mb-1 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(permit.startDate)} - {formatDate(permit.endDate)}
              </p>
              <p className="text-[#0d2600] mb-1 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {permit.location}
              </p>
              <p className="text-[#0d2600] mb-1 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {permit.type}
              </p>
              <p className="text-[#0d2600] text-sm mb-4 flex items-center">
                <Calendar className="w-3 h-3 mr-2" />
                Listed on: {formatDate(permit.listingDate)}
              </p>
              <div className="mt-auto flex justify-between">
                <Link href={`/permit/${permit.id}`} className="bg-[#0d2600] text-white py-2 px-4 rounded hover:bg-[#3c3833] text-sm">
                  View details
                </Link>
                <Link href={`/message/${permit.id}`} className="bg-[#d0ef9a] text-[#0d2600] py-2 px-4 rounded hover:bg-[#c0df8a] text-sm">
                  Send message
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}