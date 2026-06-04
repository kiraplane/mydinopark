import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: FaqItem[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-[#2A3242] bg-[#10131A] px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-[#2A3242]"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-white hover:text-[#22D3EE] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-7 text-[#AAB2C0]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
