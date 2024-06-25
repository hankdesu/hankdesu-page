import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-light-gray-blue flex h-[calc(100dvh-200px)] w-full flex-col items-center justify-center gap-10 text-3xl font-semibold">
      <h2>404 | Not Found</h2>
      <Link
        className="rounded-[30px] border-2 border-accent-orange bg-dark-navy px-10 py-3 text-accent-orange hover:bg-accent-orange hover:text-white"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
