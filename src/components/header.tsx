'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Logo from './logo';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'All Events', path: '/events/all' },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header
      className='flex h-14 items-center justify-between border-b border-white/10
     px-3 sm:px-9'
    >
      <Logo />
      <nav>
        <ul className='flex gap-x-6 text-sm'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={clsx('transition hover:text-white', {
                'text-white': activePathname === route.path,
                'text-white/50': activePathname !== route.path,
              })}
            >
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
