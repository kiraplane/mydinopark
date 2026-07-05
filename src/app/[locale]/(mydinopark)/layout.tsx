import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { MyDinoParkPageShell } from '@/components/mydinopark/wiki-navigation';
import type { ReactNode } from 'react';

export default function MyDinoParkLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0C1F14]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <MyDinoParkPageShell>{children}</MyDinoParkPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#2E5B3C] border-t bg-[#0C1F14]" />
      <Footer />
    </div>
  );
}
