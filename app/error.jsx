'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6 py-20">
      <h2 className="text-3xl font-serif font-bold text-[#2c2c2c] mb-4">Something went wrong!</h2>
      <p className="text-[#525252] mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error occurred while loading this page.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-[#b3a394] text-white rounded hover:bg-[#a39384] transition-colors cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
