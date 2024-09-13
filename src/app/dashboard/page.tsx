'use client';

import { useAuth } from '../../lib/hooks/useAuth';
import { useEffect, useState } from 'react';
import { getDocuments } from '../../lib/firebase/firebaseUtils';
import Link from 'next/link';

interface Permit {
  id: string;
  userId: string; // Added this property
  location: string;
  type: string;
  startDate: string;
  endDate: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [userPermits, setUserPermits] = useState<Permit[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUserPermits = async () => {
        try {
          const permits = await getDocuments<Permit>('permits');
          const filteredPermits = permits.filter((permit) => permit.userId === user.uid);
          setUserPermits(filteredPermits);
        } catch (err) {
          console.error('Error fetching permits:', err);
          setError('Failed to fetch permits. Please try again later.');
        }
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
      {error && <p className="text-red-500">{error}</p>}
      {userPermits.length > 0 ? (
        <ul>
          {userPermits.map((permit) => (
            <li key={permit.id} className="mb-4">
              <h3 className="font-semibold">{permit.type} - {permit.location}</h3>
              <p>From: {permit.startDate} To: {permit.endDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no permits listed.</p>
      )}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Your Messages</h2>
      {/* Display user's messages */}
    </div>
  );
}