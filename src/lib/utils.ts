import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line import/no-unused-modules
export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}
