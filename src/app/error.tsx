// app/error.tsx
"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
    </div>
  );
}
