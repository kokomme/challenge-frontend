import TitleItem from '../title-item/TitleItem';
import './TitleList.css';
import type { TitleListProps } from './TitleList.types';

export function TitleList<T extends { id: string | number; title: string }>({
  items,
  selectedIndex = -1,
  onSelect,
}: TitleListProps<T>) {
  return (
    <div className="title-list">
      {items.map((item, i) => (
        <TitleItem key={item.id} title={item.title} selected={i === selectedIndex} onClick={() => onSelect?.(i)} />
      ))}
    </div>
  );
}

export default TitleList;
