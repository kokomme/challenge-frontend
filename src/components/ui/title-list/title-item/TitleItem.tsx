import type { FC } from 'react';
import './title-item.css';
import type { TitleItemProps } from './type';

export const TitleItem: FC<TitleItemProps> = ({ title, selected = false, onClick }) => {
  return (
    <div
      className={`title-item ${selected ? 'is-selected' : ''}`}
      role="button"
      aria-pressed={selected}
      onClick={onClick}
    >
      <div className="title-text">{title}</div>
    </div>
  );
};

export default TitleItem;
