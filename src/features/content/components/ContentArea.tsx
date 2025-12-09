
import React, { useState } from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import EditButton from '../../../components/ui/button/edit-button/EditButton';
import EditActionButtons from './edit-action-buttons/EditActionButtons';
import './ContentArea.css';
import { useContent } from '../hooks/useContent';
import { useUpdateContent } from '../hooks/useUpdateContent';
import { useSelectedContent } from '../context/useSelectedContent';
import type { UpdateContentDTO } from '../../../types/type';
import { validateTitle, validateBody, VALIDATION_RULES } from '../../../lib/validation';

const ContentArea: React.FC = () => {
	const { selectedId } = useSelectedContent();
	const { data, isLoading, isError } = useContent(selectedId ?? undefined);
	const updateMutation = useUpdateContent();

	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isEditingTextArea, setIsEditingTextArea] = useState(false);
	const [tempTitle, setTempTitle] = useState('');
	const [tempText, setTempText] = useState('');
	const [validationError, setValidationError] = useState<string | null>(null);

	const title = data?.title ?? '';
	const text = data?.body ?? '';

	const handleEdit = (type: 'title' | 'text', action: 'start' | 'cancel' | 'save') => {
		if (type === 'title') {
			if (action === 'start') {
				setTempTitle(title);
				setValidationError(null);
				setIsEditingTitle(true);
			} else if (action === 'save') {
				const titleError = validateTitle(tempTitle);
				if (titleError) {
					setValidationError(titleError.message);
					return;
				}
				const payload: UpdateContentDTO = { title: tempTitle, body: text };
				if (selectedId != null) updateMutation.mutate({ id: selectedId, payload });
				setValidationError(null);
				setIsEditingTitle(false);
			} else {
				setValidationError(null);
				setIsEditingTitle(false);
			}
		} else {
			if (action === 'start') {
				setTempText(text);
				setValidationError(null);
				setIsEditingTextArea(true);
			} else if (action === 'save') {
				const bodyError = validateBody(tempText);
				if (bodyError) {
					setValidationError(bodyError.message);
					return;
				}
				const payload: UpdateContentDTO = { title, body: tempText };
				if (selectedId != null) updateMutation.mutate({ id: selectedId, payload });
				setValidationError(null);
				setIsEditingTextArea(false);
			} else {
				setValidationError(null);
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
					<div style={{ flex: 1 }}>
						<input
							type="text"
							value={tempTitle}
							onChange={(e) => setTempTitle(e.target.value)}
							className="title-input"
							maxLength={VALIDATION_RULES.title.max}
						/>
						<div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
							{tempTitle.length}/{VALIDATION_RULES.title.max}文字
						</div>
						{validationError && isEditingTitle && (
							<div style={{ fontSize: 12, color: 'red', marginTop: 4 }}>
								{validationError}
							</div>
						)}
					</div>
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
					<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
						<textarea
							value={tempText}
							onChange={(e) => setTempText(e.target.value)}
							className="content-textarea-input"
							maxLength={VALIDATION_RULES.body.max}
						/>
						<div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>
							{tempText.length}/{VALIDATION_RULES.body.max}文字
						</div>
						{validationError && isEditingTextArea && (
							<div style={{ fontSize: 12, color: 'red', marginTop: 4 }}>
								{validationError}
							</div>
						)}
					</div>
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

