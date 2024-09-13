'use client';

import { useAuth } from '../../lib/hooks/useAuth';
import { useEffect, useState } from 'react';
import { getDocuments } from '../../lib/firebase/firebaseUtils';
import Link from 'next/link';

interface Permit {
  id: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [userPermits, setUserPermits] = useState<Permit[]>([]);

  useEffect(() => {
    if (user) {
      const fetchUserPermits = async () => {
        const permits = await getDocuments('permits');
        const filteredPermits = permits.filter((permit: Permit) => permit.userId === user.uid);
        setUserPermits(filteredPermits);
      };
      fetchUserPermits();
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Link href="/permits/new" className="bg-green-500 text-white px-4 py-2 rounded">
        List New Permit
      </Link>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Permits</h2>
      {/* Display user's permits */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Messages</h2>
      {/* Display user's messages */}
    </div>
  );
}