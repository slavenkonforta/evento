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

type EventsPageProps = MetadataProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = ({ params }: MetadataProps): Metadata => {
  const { city } = params;
  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
};

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;

  return (
    <main className='flex flex-col items-center px-[20px] py-24'>
      <H1 className='mb-28'>{city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`}</H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
