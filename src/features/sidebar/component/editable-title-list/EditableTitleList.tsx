import Button from '../../../../components/ui/button/Button';
import type { MouseEvent } from 'react';
import { DeleteIcon } from '../../../../components/icons/Icons';
import './EditableTitleList.css';
import type { EditableTitleListProps } from './EditableTitleList.types';

export function EditableTitleList<T extends { id: string | number; title: string }>({
  items,
  selectedIndex = -1,
  onSelect,
  onDelete,
}: EditableTitleListProps<T>) {
  return (
    <div className="editable-title-list">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`editable-title-item ${i === selectedIndex ? 'is-selected' : ''}`}
        >
          <button
            type="button"
            className="editable-title-item__content"
            onClick={() => onSelect?.(i)}
            aria-pressed={i === selectedIndex}
          >
            <div className="editable-title-item__text">{item.title}</div>
          </button>
          <div className="editable-title-item__delete">
            <Button
              variant="icon"
              icon={<DeleteIcon />}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onDelete?.(i);
              }}
              aria-label={`Delete ${item.title}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditableTitleList;
