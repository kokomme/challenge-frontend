import React from 'react';
import CancelButton from '../cancel-button/CancelButton';
import SaveButton from '../save-button/SaveButton';
import './EditActionButtons.css';

type EditActionButtonsProps = {
	onCancel: () => void;
	onSave: () => void;
	className?: string;
};

const EditActionButtons: React.FC<EditActionButtonsProps> = ({ onCancel, onSave, className = '' }) => {
	return (
		<div className={`edit-action-buttons ${className}`}>
			<CancelButton onClick={onCancel} />
			<SaveButton onClick={onSave} />
		</div>
	);
};

export default EditActionButtons;
