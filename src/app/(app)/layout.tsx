import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppLayout(props: Props) {
  const { children } = props;

  return <main className="flex min-h-screen flex-col">{children}</main>;
}
