
import './sidebar.css';
import Branding from './branding/Branding.tsx';
import TitleList from './title-list/TitleList.tsx';
import Button from '../../../components/ui/button/Button.tsx';
import { EditIcon } from '../../../components/icons/Icons.tsx';
import type { SidebarProps } from '../types/Sidebar.types.ts';

export function Sidebar<T extends { id: string | number; title: string }>({
	items,
	selectedIndex = -1,
	onSelect,
	onEdit,
}: SidebarProps<T>) {
	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<Branding />
			</div>

			<div className="sidebar__section">
				<div className="sidebar__list">
					<TitleList items={items} selectedIndex={selectedIndex} onSelect={onSelect} />
				</div>
			</div>

			<div className="sidebar__fab">
				<Button
					size="md"
					variant="primary"
					icon={<EditIcon />}
					onClick={onEdit}
				>
					Edit
				</Button>
			</div>
		</aside>
	);
}

export default Sidebar;

