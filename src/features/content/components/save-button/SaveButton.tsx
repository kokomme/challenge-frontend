import React from 'react';
import Button from '../../../../components/ui/button/Button';
import { SaveIcon } from '../../../../components/icons/Icons';

type SaveButtonProps = {
	onClick: () => void;
	className?: string;
};

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, className = '' }) => {
	return (
		<Button
			size="sm"
			variant="primary"
			icon={<SaveIcon />}
			onClick={onClick}
			className={className}
		>
			Save
		</Button>
	);
};

export default SaveButton;
