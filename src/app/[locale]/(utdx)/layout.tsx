import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function UtdxLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#060B12]">
      <Navbar scroll={true} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
