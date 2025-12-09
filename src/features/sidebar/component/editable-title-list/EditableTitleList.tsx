import Button from '../../../../components/ui/button/Button';
import type { MouseEvent } from 'react';
import { DeleteIcon } from '../../../../components/icons/Icons';
import './EditableTitleList.css';
import type { EditableTitleListProps } from './EditableTitleList.types';
import useDeleteContent from '../../../content/hooks/useDeleteContent';

export function EditableTitleList<T extends { id:number; title: string | null }>({
  items,
  selectedId = null,
  onSelect,
}: EditableTitleListProps<T>) {

  const deleteContent = useDeleteContent();

  const onDelete = (id: number) => {
    deleteContent.mutate ( id , {​​ 
      成功時: ( )  =>  {
        if  (選択されたID  ===  id )  {
          // 別の項目を自動選択するか、何も残っていない場合は選択をクリアします
          const  residualItems  =  items.filter ( item = > item.id ! == id ) ;​​    
           残りのアイテム数.長さ> 0の場合   
            「?」を選択してください。( remainingItems [ 0 ] .id ) ;​
          } それ以外 {
            onSelect ?. ( null ) ;
          }
        }
      }
    } ) ;
  };

  return (
    <div className="editable-title-list">
      {items.map((item) => (
        <div
          key={item.id}
          className={`editable-title-item ${item.id === selectedId ? 'is-selected' : ''}`}
        >
          <button
            type="button"
            className="editable-title-item__content"
            onClick={() => onSelect?.(item.id)}
            aria-pressed={item.id === selectedId}
          >
            <div className="editable-title-item__text">{item.title}</div>
          </button>
          <div className="editable-title-item__delete">
            <Button
              variant="icon"
              icon={<DeleteIcon />}
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                onDelete?.(item.id);
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
