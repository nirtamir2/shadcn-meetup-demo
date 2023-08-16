import { Button } from "@/components/ui/button";


function MyButtons() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Hi</Button>
      <Button variant="outline">World</Button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <MyButtons />
    </div>
  );
}