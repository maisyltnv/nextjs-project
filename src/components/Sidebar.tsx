import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/admin" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/users" className="hover:text-blue-600">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}