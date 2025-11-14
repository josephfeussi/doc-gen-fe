// src/app/page.tsx
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import Link from "next/link"
import React from 'react';

export default function HomePage() {
  return (
    <MainLayout>
      {" "}
      {/* <--- Wrap the content here */}
      <div className="flex flex-col items-center justify-center py-24 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-indigo-700">
          🏛️ Funding Document Generator
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Core structure complete! Styling is ready for component building.
        </p>
        {/* Test the button and card components */}
        <div className="mt-8 flex gap-4">
          <Button>
            <Link href="/documents">View Templates</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/templates">View Templates</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}

