import TitleItem from './title-item/TitleItem';
import './title-list.css';
import type { TitleListProps } from './type';

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
