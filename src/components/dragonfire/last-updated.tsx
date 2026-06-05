import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#3A2721] bg-[#15110F] px-3 py-2 text-xs font-medium text-[#B8A99A]">
      <CalendarDays className="size-4 text-[#D6A03D]" />
      Last checked {date}
    </div>
  );
}
