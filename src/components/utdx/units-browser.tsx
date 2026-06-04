'use client';

import { Input } from '@/components/ui/input';
import type { Unit, UnitRarity, UnitRole } from '@/data/utdx/types';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { UnitCard } from './unit-card';

const rarityOrder: Array<UnitRarity | 'all'> = [
  'all',
  'Boundless',
  'Universal',
  'Unrivaled',
  'Synchro',
  'Secret',
  'Mythic',
  'Legendary',
  'Epic',
  'Rare',
];

export function UnitsBrowser({ units }: { units: Unit[] }) {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState<UnitRole | 'all'>('all');
  const [rarity, setRarity] = useState<UnitRarity | 'all'>('all');

  const roles = useMemo(
    () =>
      ['all', ...Array.from(new Set(units.map((item) => item.role)))] as const,
    [units]
  );

  const rarities = rarityOrder.filter(
    (item) => item === 'all' || units.some((unit) => unit.rarity === item)
  );

  const filtered = useMemo(() => {
    return units.filter((unit) => {
      const haystack = [
        unit.name,
        unit.rarity,
        unit.role,
        unit.placement,
        unit.element,
        unit.updateTag,
        unit.bestTraits.join(' '),
        unit.bestRelics.join(' '),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesRole = role === 'all' || unit.role === role;
      const matchesRarity = rarity === 'all' || unit.rarity === rarity;
      return matchesQuery && matchesRole && matchesRarity;
    });
  }, [units, query, role, rarity]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 rounded-lg border border-[#2A3242] bg-[#171B25] p-3">
        <div className="relative block">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-[#7F8AA3]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by unit, rarity, role, trait, relic, or update"
            aria-label="Search Universal Tower Defense X units"
            className="h-11 border-[#485366] bg-[#10131A] pl-9 text-white placeholder:text-[#7F8AA3]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {roles.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRole(item)}
              className={`h-10 rounded-md border px-3 text-sm font-medium transition ${
                role === item
                  ? 'border-[#27D8B8] bg-[#27D8B8] text-[#07111F]'
                  : 'border-[#485366] bg-[#10131A] text-[#D7DCE7] hover:border-[#27D8B8]'
              }`}
            >
              {item === 'all' ? 'All roles' : item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {rarities.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setRarity(item)}
              className={`h-10 rounded-md border px-3 text-sm font-medium transition ${
                rarity === item
                  ? 'border-[#22D3EE] bg-[#22D3EE] text-[#07111F]'
                  : 'border-[#485366] bg-[#10131A] text-[#D7DCE7] hover:border-[#22D3EE]'
              }`}
            >
              {item === 'all' ? 'All rarities' : item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
