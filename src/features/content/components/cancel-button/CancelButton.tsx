import React from 'react';
import Button from '../../../../components/ui/button/Button';
import { CancelIcon } from '../../../../components/icons/Icons';

type CancelButtonProps = {
	onClick: () => void;
	className?: string;
};

const CancelButton: React.FC<CancelButtonProps> = ({ onClick, className = '' }) => {
	return (
		<Button
			size="sm"
			variant="normal"
			icon={<CancelIcon />}
			onClick={onClick}
			className={className}
		>
			Cancel
		</Button>
	);
};

export default CancelButton;
