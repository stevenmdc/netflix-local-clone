import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
