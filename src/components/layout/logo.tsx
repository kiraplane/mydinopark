'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Nophenia logo"
      title="Nophenia"
      className={cn(
        'relative inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-md',
        'border border-[#6DDFC4]/60 bg-[#070911] shadow-[0_0_30px_rgba(109,223,196,0.22)]',
        className
      )}
    >
      <Image
        src="/nophenia/nophenia-icon.png"
        alt=""
        fill
        sizes="44px"
        className="object-cover"
      />
    </span>
  );
}
