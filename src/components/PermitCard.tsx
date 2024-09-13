import Link from 'next/link';
import { useAuth } from '../lib/hooks/useAuth';

interface Permit {
  id: string;
  location: string;
  state: string;
  type: string;
  startDate: string;
  endDate: string;
}

interface PermitCardProps {
  permit: Permit;
}

export default function PermitCard({ permit }: PermitCardProps) {
  const { user } = useAuth();

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{permit.location}</h2>
      <p>State: {permit.state}</p>
      <p>Type: {permit.type}</p>
      <p>Start Date: {permit.startDate}</p>
      <p>End Date: {permit.endDate}</p>
      {user ? (
        <Link href={`/permits/${permit.id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          View Details
        </Link>
      ) : (
        <Link href="/login" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
          Login to Contact
        </Link>
      )}
    </div>
  );
}