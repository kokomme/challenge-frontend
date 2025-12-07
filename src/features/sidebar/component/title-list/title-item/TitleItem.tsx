import type { FC } from 'react';
import './title-item.css';
import type { TitleItemProps } from './type';

export const TitleItem: FC<TitleItemProps> = ({ title, selected = false, onClick }) => {
  return (
    <button
      type="button"
      className={`title-item ${selected ? 'is-selected' : ''}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      <div className="title-text">{title}</div>
    </button>
  );
};

export default TitleItem;
