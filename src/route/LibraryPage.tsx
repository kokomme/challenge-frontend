import { useState } from 'react';
import Branding from '../components/ui/branding/Branding';
import TitleList from '../features/title-list/TitleList';
import type { TitleItemData } from '../types/type';

export default function LibraryPage() {
  const items: TitleItemData[] = [
    { id: 1, title: 'Hello Title', body: 'Hello Body', createdAt: '2025-04-04T00:00:00.000Z', updatedAt: '2025-04-04T00:00:00.000Z' },
    { id: 2, title: 'Title B', body: 'Body B', createdAt: '2025-04-05T00:00:00.000Z', updatedAt: '2025-04-05T00:00:00.000Z' },
    { id: 3, title: 'Title C', body: 'Body C', createdAt: '2025-04-06T00:00:00.000Z', updatedAt: '2025-04-06T00:00:00.000Z' },
    { id: 4, title: 'Title D', body: 'Body D', createdAt: '2025-04-07T00:00:00.000Z', updatedAt: '2025-04-07T00:00:00.000Z' },
  ];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-start gap-6">
        <Branding />
        <TitleList items={items} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      </div>
    </div>
  );
}
