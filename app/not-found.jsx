export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6 py-20">
      <h2 className="text-4xl font-serif font-bold text-[#2c2c2c] mb-4">404</h2>
      <h3 className="text-2xl font-serif text-[#2c2c2c] mb-4">Page Not Found</h3>
      <p className="text-[#525252] mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#2c2c2c] text-white rounded hover:bg-[#3c3c3c] transition-colors no-underline inline-block"
      >
        Return Home
      </a>
    </div>
  );
}
