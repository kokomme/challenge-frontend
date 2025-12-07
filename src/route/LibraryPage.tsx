import { useState } from 'react';
import Branding from '../components/ui/branding/Branding';
import TitleList from '../components/ui/title-list/TitleList';

export default function LibraryPage() {
  const items = ['Title A', 'Title B', 'Title C', 'Title D'];
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
