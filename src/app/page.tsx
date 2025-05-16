'use client'

import Counter from "@/components/Counter";
import { useCounter } from "@/context/CounterContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const {count, setCount} = useCounter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/counter">Go to counter</Link>
      <Link href="/profile">Go to profile</Link>

      <p>This is count {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount((prev: number) => count <= 0 ? 0 : prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
