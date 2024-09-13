'use client';

import { useState, useEffect } from 'react';
import { getDocuments } from '../lib/firebase/firebaseUtils';
import PermitCard from './PermitCard';
import PermitFilter from './PermitFilter';

interface Permit {
  id: string;
  location: string;
  state: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface FilterOptions {
  state: string;
  keyword: string;
  type: string;
  startDate: string;
  endDate: string;
}

export default function PermitList() {
  const [permits, setPermits] = useState<Permit[]>([]);
  const [filteredPermits, setFilteredPermits] = useState<Permit[]>([]);

  useEffect(() => {
    const fetchPermits = async () => {
      const fetchedPermits = await getDocuments('permits');
      setPermits(fetchedPermits as Permit[]);
      setFilteredPermits(fetchedPermits as Permit[]);
    };
    fetchPermits();
  }, []);

  const handleFilter = (options: FilterOptions) => {
    const filtered = permits.filter((permit) => {
      return (
        (!options.state || permit.state === options.state) &&
        (!options.keyword || permit.location.toLowerCase().includes(options.keyword.toLowerCase())) &&
        (!options.type || permit.type.toLowerCase().includes(options.type.toLowerCase())) &&
        (!options.startDate || permit.startDate >= options.startDate) &&
        (!options.endDate || permit.endDate <= options.endDate)
      );
    });
    setFilteredPermits(filtered);
  };

  return (
    <div>
      <PermitFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPermits.map((permit) => (
          <PermitCard key={permit.id} permit={permit} />
        ))}
      </div>
    </div>
  );
}