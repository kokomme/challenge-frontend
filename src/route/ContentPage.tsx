import { useState } from 'react';
import Sidebar from '../features/sidebar/component/Sidebar';
import ContentArea from '../features/content/components/ContentArea';
import type { TitleItemData } from '../types/type';
import './ContentPage.css';

export default function ContentPage() {
  const items: TitleItemData[] = [
    { id: 1, title: 'Hello Title', body: 'Hello Body', createdAt: '2025-04-04T00:00:00.000Z', updatedAt: '2025-04-04T00:00:00.000Z' },
    { id: 2, title: 'Title B', body: 'Body B', createdAt: '2025-04-05T00:00:00.000Z', updatedAt: '2025-04-05T00:00:00.000Z' },
    { id: 3, title: 'Title C', body: 'Body C', createdAt: '2025-04-06T00:00:00.000Z', updatedAt: '2025-04-06T00:00:00.000Z' },
    { id: 4, title: 'Title D', body: 'Body D', createdAt: '2025-04-07T00:00:00.000Z', updatedAt: '2025-04-07T00:00:00.000Z' },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <main className="content-page">
      <aside className="sidebar-column">
        <Sidebar
          items={items}
          selectedIndex={selectedIndex}
          onSelect={(i) => setSelectedIndex(i)}
          onEdit={() => {
            console.log('Edit clicked');
          }}
        />
      </aside>

      <section className="main-column">
        <ContentArea />
      </section>
    </main>
  );
}
