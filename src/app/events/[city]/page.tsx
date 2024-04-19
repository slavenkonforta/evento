import EventsList from '@/components/events-list';
import H1 from '@/components/h1';
import { EventoEvent } from '@/lib/types';

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventsPageProps) {
  const { city } = params;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className='flex flex-col items-center px-[20px] py-24'>
      <H1 className='mb-28'>{city === 'all' ? 'All Events' : `Events in ${capitalizedCity}`}</H1>
      <EventsList events={events} />
    </main>
  );
}
