import React from 'react';
import Button from '../../../../components/ui/button/Button';
import { EditIcon } from '../../../../components/icons/Icons';

type EditButtonProps = {
	onClick: () => void;
	className?: string;
};

const EditButton: React.FC<EditButtonProps> = ({ onClick, className = '' }) => {
	return (
		<Button
			size="md"
			variant="primary"
			icon={<EditIcon />}
			onClick={onClick}
			className={className}
		>
			Edit
		</Button>
	);
};

export default EditButton;
