import type { GuideFaq } from '@/data/nophenia/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#26384A] bg-[#111827] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#F6F0EA]">
        {title}
      </h2>
      <div className="mt-6 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#26384A] bg-[#070911] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#F6F0EA] transition group-open:text-[#F6D089]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#D8E8EF]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
