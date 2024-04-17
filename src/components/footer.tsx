import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <Link href='/privacy-policy'>Privacy Policy</Link>
      <Link href='/terms-conditions'>Terms & Conditions</Link>
    </footer>
  );
}
