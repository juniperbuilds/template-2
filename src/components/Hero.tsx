"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function Hero() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <section className="bg-white text-[#0d2600] py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Outdoor Adventure</h1>
        <p className="mb-8">Swap permits for national parks, camping sites, and more!</p>
        <div className="max-w-4xl mx-auto">
          <form className="flex flex-wrap justify-center gap-4">
            <select 
              className="p-2 rounded text-[#0d2600] border border-[#0d2600] w-full sm:w-auto"
              defaultValue=""
            >
              <option value="" disabled>Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <input 
              type="text" 
              placeholder="Park or Location Keyword" 
              className="p-2 rounded text-[#0d2600] border border-[#0d2600] w-full sm:w-64"
            />
            <DatePicker
              selectsRange={true}
              startDate={startDate ?? undefined}
              endDate={endDate ?? undefined}
              onChange={(update: [Date | null, Date | null]) => {
                setDateRange(update);
              }}
              placeholderText="Select Dates"
              className="p-2 rounded text-[#0d2600] border border-[#0d2600] w-full sm:w-auto"
              dateFormat="MM/dd/yy"
            />
            <select className="p-2 rounded text-[#0d2600] border border-[#0d2600] w-full sm:w-auto">
              <option value="">Permit Type</option>
              <option value="camping">Camping</option>
              <option value="hiking">Hiking</option>
              <option value="fishing">Fishing</option>
            </select>
            <button type="submit" className="bg-[#0d2600] text-white font-bold py-2 px-4 rounded hover:bg-[#3c3833] w-full sm:w-auto">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}