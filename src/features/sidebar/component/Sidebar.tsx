
import './sidebar.css';
import { useEffect, useState } from 'react';
import Branding from './branding/Branding.tsx';
import TitleList from './title-list/TitleList.tsx';
import EditableTitleList from './editable-title-list/EditableTitleList.tsx';
import Button from '../../../components/ui/button/Button.tsx';
import EditButton from '../../../components/ui/button/edit-button/EditButton.tsx';
import { DoneIcon, PlusIcon } from '../../../components/icons/Icons.tsx';
import { useContents } from '../../content/hooks/useContents';
import { useSelectedContent } from '../../content/context/useSelectedContent';
import useCreateContent from '../../content/hooks/useCreateContent.ts';

export function Sidebar() {
	const { data, isLoading, isError } = useContents();
	const { selectedId, setSelectedId } = useSelectedContent();
	const [editing, setEditing] = useState(false);
	const [toastMessage, setToastMessage] = useState<string | null>(null);
	
	const listItems = data?.map(item => ({ id: item.id, title: item.title })) ?? [];

	// 選択されていない場合、最初の項目を自動選択する
	useEffect(() => {
		if (selectedId == null && data && data.length > 0) {
			setSelectedId(data[0].id);
		}
	}, [selectedId, data, setSelectedId]);

	const handleSelect = (id: number) => {
		setSelectedId(id);
	};

	const createMutation = useCreateContent();
	const { mutateAsync, isPending: isCreating } = createMutation;

	// Toast cleanup to prevent memory leaks
	useEffect(() => {
		if (!toastMessage) return;
		const timer = setTimeout(() => setToastMessage(null), 4000);
		return () => clearTimeout(timer);
	}, [toastMessage]);

	const handleCreate = async () => {
		try {
			const created = await mutateAsync({ title: 'New Page', body: 'New Page' });
			// 新しく作成された項目を選択する
			setSelectedId(created.id);
		} catch (err: unknown) {
			const msg = err instanceof Error ? err.message : 'Failed to create';
			setToastMessage(msg);
		}
	};

	const handleStartEdit = () => {
		setEditing(true);
	};

	const handleDone = () => {
		setEditing(false);
	};
	
	return (
		<aside className="sidebar">
			<div className="sidebar__header">
				<Branding />
			</div>

		<div className="sidebar__section">
			<div className="sidebar__list">
				{isLoading ? (
					<div style={{ padding: 16 }}>Loading...</div>
								) : isError ? (
					<div style={{ padding: 16, color: 'red' }}>Failed to load</div>
								) : !editing ? (
									<TitleList items={listItems} selectedId={selectedId} onSelect={handleSelect} />
								) : (
									<EditableTitleList
										items={listItems}
										selectedId={selectedId}
										onSelect={handleSelect}
									/>
				)}
			</div>
		</div>			<div className="sidebar__fab">
				{!editing ? (
					<EditButton onClick={handleStartEdit} />
				) : (
					<div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>
						<Button variant="secondary" size="md" icon={<PlusIcon />} onClick={() => void handleCreate()} disabled={isCreating}>
							New page
						</Button>
						<Button size="md" variant="primary" icon={<DoneIcon />} onClick={handleDone}>
							Done
						</Button>
					</div>
				)}
			</div>
			{toastMessage && (
				<div className="sidebar__toast">
					{toastMessage}
				</div>
			)}
		</aside>
	);
}

export default Sidebar;

