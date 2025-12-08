
import React, { useState } from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import EditButton from '../../../components/ui/button/edit-button/EditButton';
import EditActionButtons from './edit-action-buttons/EditActionButtons';
import './ContentArea.css';

const ContentArea: React.FC = () => {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isEditingTextArea, setIsEditingTextArea] = useState(false);
	const [title, setTitle] = useState('坊ちゃん');
	const [text, setText] = useState('親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。');
	const [tempTitle, setTempTitle] = useState('');
	const [tempText, setTempText] = useState('');

	const handleEdit = (type: 'title' | 'text', action: 'start' | 'cancel' | 'save') => {
		if (type === 'title') {
			if (action === 'start') {
				setTempTitle(title);
				setIsEditingTitle(true);
			} else if (action === 'save') {
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
				setText(tempText);
				setIsEditingTextArea(false);
			} else {
				setIsEditingTextArea(false);
			}
		}
	};

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

