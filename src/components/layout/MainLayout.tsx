// src/components/layout/MainLayout.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Placeholder Navbar */}
      <Card className="rounded-none border-t-0 border-x-0 border-b-2 shadow-sm p-4 bg-white">
        <header className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl font-extrabold text-indigo-800">
            F.D.G.
          </h1>
          <nav>
            {/* Placeholder for future Login/Dashboard buttons */}
            <Button variant="ghost" className="mr-2">Login</Button>
            <Button>Dashboard</Button>
          </nav>
        </header>
      </Card>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}