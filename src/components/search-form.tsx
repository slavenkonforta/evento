'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full sm:w-[580px]'>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        className='h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none
           ring-accent/50 transition focus:bg-white/10 focus:ring-2'
        placeholder='Search events in any city...'
        spellCheck={false}
      />
    </form>
  );
}
