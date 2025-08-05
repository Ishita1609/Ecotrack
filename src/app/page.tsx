import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-4">Welcome to EcoTrack 🌱</h1>
      <Button variant="default">Get Started</Button>
    </main>
  );
}
