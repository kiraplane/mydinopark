'use client';

import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function CodeCopyButton({
  code,
  labels = { copy: 'Copy', copied: 'Copied' },
}: {
  code: string;
  labels?: {
    copy: string;
    copied: string;
  };
}) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      size="sm"
      className="bg-[#FF8A4C] text-[#102114] hover:bg-[#F6C453]"
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1400);
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? labels.copied : labels.copy}
    </Button>
  );
}
