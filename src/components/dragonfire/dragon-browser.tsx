'use client';

import { Input } from '@/components/ui/input';
import type { Dragon, DragonTier } from '@/data/dragonfire/types';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DragonCard } from './dragon-card';

const tiers: Array<DragonTier | 'All'> = [
  'All',
  'Recommended',
  'Situational',
  'Data Pending',
];

export function DragonBrowser({ dragons }: { dragons: Dragon[] }) {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<DragonTier | 'All'>('All');

  const roles = useMemo(
    () => ['All', ...Array.from(new Set(dragons.map((dragon) => dragon.role)))],
    [dragons]
  );
  const [role, setRole] = useState<string>('All');

  const filtered = useMemo(() => {
    return dragons.filter((dragon) => {
      const haystack = [
        dragon.name,
        dragon.role,
        dragon.tier,
        dragon.affinity,
        dragon.summary,
        dragon.bestUse,
      ]
        .join(' ')
        .toLowerCase();
      return (
        haystack.includes(query.toLowerCase()) &&
        (tier === 'All' || dragon.tier === tier) &&
        (role === 'All' || dragon.role === role)
      );
    });
  }, [dragons, query, role, tier]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 rounded-lg border border-[#3A2721] bg-[#15110F] p-3">
        <div className="relative">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-[#8C7A69]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dragons, roles, unlock notes, or best use"
            aria-label="Search Game of Thrones Dragonfire dragons"
            className="h-11 border-[#4A4039] bg-[#0E0B0A] pl-9 text-[#F7EFE3] placeholder:text-[#8C7A69]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {tiers.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setTier(item)}
              className={`h-10 rounded-md border px-3 text-sm font-medium transition ${
                tier === item
                  ? 'border-[#D6A03D] bg-[#D6A03D] text-[#110D0B]'
                  : 'border-[#4A4039] bg-[#0E0B0A] text-[#F7EFE3] hover:border-[#D6A03D]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {roles.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRole(item)}
              className={`h-10 rounded-md border px-3 text-sm font-medium transition ${
                role === item
                  ? 'border-[#B91C1C] bg-[#B91C1C] text-[#F7EFE3]'
                  : 'border-[#4A4039] bg-[#0E0B0A] text-[#F7EFE3] hover:border-[#B91C1C]'
              }`}
            >
              {item === 'All' ? 'All roles' : item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((dragon) => (
          <DragonCard key={dragon.slug} dragon={dragon} />
        ))}
      </div>
    </div>
  );
}
