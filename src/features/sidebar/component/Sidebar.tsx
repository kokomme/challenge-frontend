
import './sidebar.css';
import { useState } from 'react';
import Branding from './branding/Branding.tsx';
import TitleList from './title-list/TitleList.tsx';
import EditableTitleList from './editable-title-list/EditableTitleList.tsx';
import Button from '../../../components/ui/button/Button.tsx';
import EditButton from '../../content/components/edit-button/EditButton';
import { DoneIcon, PlusIcon } from '../../../components/icons/Icons.tsx';
import type { SidebarProps } from '../types/Sidebar.types.ts';

export function Sidebar<T extends { id: string | number; title: string }>({
	items,
	selectedIndex = -1,
	onSelect,
	onEdit,
}: SidebarProps<T>) {
	const [editing, setEditing] = useState(false);

	function handleStartEdit() {
		setEditing(true);
		if (onEdit) onEdit();
	}

	function handleDone() {
		setEditing(false);
		if (onEdit) onEdit();
	}
	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<Branding />
			</div>

		<div className="sidebar__section">
			<div className="sidebar__list">
				{!editing ? (
					<TitleList items={items} selectedIndex={selectedIndex} onSelect={onSelect} />
				) : (
					<EditableTitleList
						items={items}
						selectedIndex={selectedIndex}
						onSelect={onSelect}
						onDelete={(index) => {
							// TODO: implement delete handler
							console.log('Delete item at index:', index);
						}}
					/>
				)}
			</div>
		</div>			<div className="sidebar__fab">
				{!editing ? (
					<EditButton onClick={handleStartEdit} />
				) : (
					<div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
						<Button variant="secondary" size="md" icon={<PlusIcon />} onClick={() => { /* TODO: add new item handler */ }}>
							New page
						</Button>
						<Button size="md" variant="primary" icon={<DoneIcon />} onClick={handleDone}>
							Done
						</Button>
					</div>
				)}
			</div>
		</aside>
	);
}

export default Sidebar;

