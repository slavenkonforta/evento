import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { capitalize } from '@/lib/utils';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';
import { z } from 'zod';

type MetadataProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = MetadataProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = ({ params }: MetadataProps): Metadata => {
  const { city } = params;
  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
};

const pageNumberSchema = z.coerce.number().int().positive().optional().default(1);

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className='flex flex-col items-center px-[20px] py-24'>
      <H1 className='mb-28'>{city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`}</H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
