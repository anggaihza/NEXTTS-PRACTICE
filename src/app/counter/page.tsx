import Counter from '@/components/Counter';
import Link from 'next/link';

export default function CounterPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Counter Page</h1>
      <Counter initialValue={5} />
      <br />
      <Link href="/">Back to Home</Link>
    </main>
  );
}
