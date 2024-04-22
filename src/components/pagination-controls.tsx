import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const linkStyles = `flex items-center gap-x-2 bg-white/5 px-5 py-3 text-white rounded-md opacity-75
   hover:opacity-100 transition text-sm`;

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
  return (
    <section className='flex w-full'>
      {!!previousPath && (
        <Link href={previousPath} className={cn('mr-auto', linkStyles)}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {!!nextPath && (
        <Link href={nextPath} className={cn('ml-auto', linkStyles)}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
