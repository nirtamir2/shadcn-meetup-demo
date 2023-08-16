import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>

      <Button variant="default">Hi there</Button>
      <Button variant="ghost">Hi there</Button>
        </div>
    </main>
  );
}