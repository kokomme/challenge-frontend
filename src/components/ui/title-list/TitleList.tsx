import type { FC } from 'react';
import TitleItem from './title-item/TitleItem';
import './title-list.css';

type TitleListProps = {
  items: string[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
};

export const TitleList: FC<TitleListProps> = ({ items, selectedIndex = -1, onSelect }) => {
  return (
    <div className="title-list">
      {items.map((t, i) => (
        <TitleItem key={i} title={t} selected={i === selectedIndex} onClick={() => onSelect?.(i)} />
      ))}
    </div>
  );
};

export default TitleList;
