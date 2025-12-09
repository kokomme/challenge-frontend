import TitleItem from '../title-item/TitleItem';
import './TitleList.css';
import type { TitleListProps } from './TitleList.types';

export function TitleList<  T extends { id: number; title: string | null }>({
  items,
  selectedId = null,
  onSelect,
}: TitleListProps<T>) {
  return (
    <div className="title-list">
      {items.map((item) => (
        <TitleItem
          key={item.id}
          title={item.title ?? 'Untitled'}
          selected={item.id === selectedId}
          onClick={() => onSelect?.(item.id)}
        />
      ))}
    </div>
  );
}

export default TitleList;
