'use client';

import { EventoEvent } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: linkRef,
    offset: ['0 1', '1.5 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={linkRef}
      href={`/event/${event.slug}`}
      className='state-effects h-[380px] max-w-[500px] flex-1 basis-80'
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section
        className='relative flex h-full w-full flex-col overflow-hidden rounded-xl
      bg-white/[3%]'
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className='h-[60%] object-cover'
        />
        <div className='flex flex-1 flex-col items-center justify-center'>
          <h2 className='text-2xl font-semibold'>{event.name}</h2>
          <p className='italic text-white/75'>By {event.organizerName}</p>
          <p className='mt-4 text-sm text-white/50'>{event.location}</p>
        </div>

        <section
          className='absolute left-[12px] top-[12px] flex size-[45px]
       flex-col items-center justify-center rounded-md bg-black/30'
        >
          <p className='-mb-[5px] text-xl font-bold'>
            {new Date(event.date).toLocaleDateString('en-US', { day: '2-digit' })}
          </p>
          <p className='text-xs uppercase text-accent'>
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
