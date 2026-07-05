import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-[#2E5B3C] bg-[#163521] px-3 py-2 font-medium text-[#C9D8BD] text-xs">
      <CalendarDays className="size-4 text-[#9BEA74]" />
      Last checked {date}
    </div>
  );
}
