import 'server-only';

import { notFound } from 'next/navigation';
import prisma from './db';
import { capitalize } from './utils';

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
