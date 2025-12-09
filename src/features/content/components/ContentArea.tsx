
import React, { useEffect, useState } from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import EditButton from '../../../components/ui/button/edit-button/EditButton';
import EditActionButtons from './edit-action-buttons/EditActionButtons';
import './ContentArea.css';
import { useContent } from '../hooks/useContent';
import { useUpdateContent } from '../hooks/useUpdateContent';
import { useSelectedContent } from '../context/SelectedContentContext';
import type { UpdateContentDTO } from '../../../types/type';

const ContentArea: React.FC = () => {
	const { selectedId } = useSelectedContent();
	const { data, isLoading, isError } = useContent(selectedId ?? undefined);
	const updateMutation = useUpdateContent();

	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isEditingTextArea, setIsEditingTextArea] = useState(false);
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [tempTitle, setTempTitle] = useState('');
	const [tempText, setTempText] = useState('');

	useEffect(() => {
		if (data) {
			setTitle(data.title ?? '');
			setText(data.body ?? '');
		}
	}, [data]);

	const handleEdit = (type: 'title' | 'text', action: 'start' | 'cancel' | 'save') => {
		if (type === 'title') {
			if (action === 'start') {
				setTempTitle(title);
				setIsEditingTitle(true);
			} else if (action === 'save') {
				const payload: UpdateContentDTO = { title: tempTitle, body: text };
				if (selectedId != null) updateMutation.mutate({ id: selectedId, payload });
				setTitle(tempTitle);
				setIsEditingTitle(false);
			} else {
				setIsEditingTitle(false);
			}
		} else {
			if (action === 'start') {
				setTempText(text);
				setIsEditingTextArea(true);
			} else if (action === 'save') {
				const payload: UpdateContentDTO = { title, body: tempText };
				if (selectedId != null) updateMutation.mutate({ id: selectedId, payload });
				setText(tempText);
				setIsEditingTextArea(false);
			} else {
				setIsEditingTextArea(false);
			}
		}
	};

	if (isLoading) return <div style={{ padding: 16 }}>Loading content...</div>;
	if (isError) return <div style={{ padding: 16, color: 'red' }}>Failed to load content</div>;

	return (
		<section className="content-area">
			<div className="content-header">
				{!isEditingTitle ? (
					<Title>{title}</Title>
				) : (
					<input
						type="text"
						value={tempTitle}
						onChange={(e) => setTempTitle(e.target.value)}
						className="title-input"
					/>
				)}
				<div className="header-actions">
					{!isEditingTitle ? (
						<EditButton onClick={() => handleEdit('title', 'start')} />
					) : (
						<EditActionButtons
							onCancel={() => handleEdit('title', 'cancel')}
							onSave={() => handleEdit('title', 'save')}
						/>
					)}
				</div>
			</div>

			<div className="textarea-wrapper">
				{!isEditingTextArea ? (
					<TextArea>
						<p>{text}</p>
					</TextArea>
				) : (
					<textarea
						value={tempText}
						onChange={(e) => setTempText(e.target.value)}
						className="content-textarea-input"
					/>
				)}
				<div className="textarea-actions">
					{!isEditingTextArea ? (
						<EditButton onClick={() => handleEdit('text', 'start')} />
					) : (
						<EditActionButtons
							onCancel={() => handleEdit('text', 'cancel')}
							onSave={() => handleEdit('text', 'save')}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContentArea;

