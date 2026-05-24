import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return twMerge(clsx(...inputs));
}

lib/utils.ts[usedfor]shared utils[/usedfor]