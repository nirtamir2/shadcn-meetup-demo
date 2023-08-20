import type { ComponentProps } from "react";
import { MyCard } from "@/app/_components/MyCard";
import { MyTable } from "@/app/_components/MyTable";
import { Button } from "@/components/ui/button";

const cards: Array<ComponentProps<typeof MyCard>> = [
  {
    content: <p>Card Footer</p>,
    title: "Card Title 1",
    description: "Card Description 2",
    footer: <p>Card Footer</p>,
  },
  {
    content: <p>Card Footer</p>,
    title: "Card Title 2",
    description: "Card Description",
    footer: <p>Card Footer</p>,
  },
  {
    content: <p>Card Footer</p>,
    title: "Card Title 3",
    description: "Card Description",
    footer: <p>Card Footer</p>,
  },
];

function CardList() {
  return (
    <ul className="flex w-full items-stretch justify-stretch gap-4">
      {cards.map((card) => {
        const { content, title, description, footer } = card;
        return (
          <li key={title}>
            <MyCard
              content={content}
              title={title}
              description={description}
              footer={footer}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Button variant="default">Hello World</Button>
        <Button variant="link">Hello World</Button>
      </div>
      <CardList />
      <MyTable />
    </div>
  );
}
