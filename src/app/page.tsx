import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="default">Hello World</Button>
      <Button variant="link">Hello World</Button>
      <div>{JSON.stringify(buttonVariants)}</div>
    </main>
  );
}
