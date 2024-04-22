import { EventoEvent } from '@prisma/client';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import prisma from './db';
import { notFound } from 'next/navigation';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getEvents = async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      ...(city !== 'all' && { city: capitalize(city) }),
    },
    orderBy: {
      date: 'asc',
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      ...(city !== 'all' && { city: capitalize(city) }),
    },
  });

  return { events, totalCount };
};

export const getEvent = async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    notFound();
  }

  return event;
};
