import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventoEvent } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getEvents = async (city: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();
  return events;
};

export const getEvent = async (slug: string) => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json();
  return event;
};
