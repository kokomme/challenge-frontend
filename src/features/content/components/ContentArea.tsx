
import React, { useState } from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import EditButton from '../../../components/ui/button/edit-button/EditButton';
import EditActionButtons from './edit-action-buttons/EditActionButtons';
import './ContentArea.css';

const ContentArea: React.FC = () => {
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isEditingTextArea, setIsEditingTextArea] = useState(false);

	const handleStartEditTitle = () => {
		setIsEditingTitle(true);
	};

	const handleCancelTitle = () => {
		setIsEditingTitle(false);
		console.log('Title edit cancelled');
	};

	const handleSaveTitle = () => {
		setIsEditingTitle(false);
		console.log('Title saved');
	};

	const handleStartEditTextArea = () => {
		setIsEditingTextArea(true);
	};

	const handleCancelTextArea = () => {
		setIsEditingTextArea(false);
		console.log('TextArea edit cancelled');
	};

	const handleSaveTextArea = () => {
		setIsEditingTextArea(false);
		console.log('TextArea saved');
	};

	return (
		<section className="content-area">
			<div className="content-header">
				<Title>坊ちゃん</Title>
				<div className="header-actions">
					{!isEditingTitle ? (
						<EditButton onClick={handleStartEditTitle} />
					) : (
						<EditActionButtons onCancel={handleCancelTitle} onSave={handleSaveTitle} />
					)}
				</div>
			</div>

			<div className="textarea-wrapper">
				<TextArea>
					<p>
						親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
					</p>
				</TextArea>
				<div className="textarea-actions">
					{!isEditingTextArea ? (
						<EditButton onClick={handleStartEditTextArea} />
					) : (
						<EditActionButtons onCancel={handleCancelTextArea} onSave={handleSaveTextArea} />
					)}
				</div>
			</div>
		</section>
	);
};

export default ContentArea;

