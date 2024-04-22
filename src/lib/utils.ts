import { EventoEvent } from '@prisma/client';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);
