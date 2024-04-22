import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { capitalize } from '@/lib/utils';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata } from 'next';

type MetadataProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = {
  params: {
    city: string;
  };
};

export const generateMetadata = ({ params }: MetadataProps): Metadata => {
  const { city } = params;
  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = params;

  return (
    <main className='flex flex-col items-center px-[20px] py-24'>
      <H1 className='mb-28'>{city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`}</H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
