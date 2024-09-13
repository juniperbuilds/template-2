'use client';

import { useState } from 'react';
import { usStates } from '../lib/usStates'; // We'll create this file later

interface FilterOptions {
  state: string;
  keyword: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface PermitFilterProps {
  onFilter: (options: FilterOptions) => void;
}

export default function PermitFilter({ onFilter }: PermitFilterProps) {
  const [state, setState] = useState('');
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ state, keyword, type, startDate, endDate });
  };

  return (
    <form onSubmit={handleFilter} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Select State</option>
          {usStates.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Keyword (e.g., National Park)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Filter
      </button>
    </form>
  );
}