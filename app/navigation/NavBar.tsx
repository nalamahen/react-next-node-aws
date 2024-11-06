import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="nav flex bg-amber-400 p-2 space-x-6">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/login" className="mr-5">
        Login
      </Link>
      <Link href="/register" className="mr-5">
        Register
      </Link>
    </nav>
  );
}
