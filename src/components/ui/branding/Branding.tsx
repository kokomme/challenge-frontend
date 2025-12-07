import type { FC } from 'react';
import { LogoIcon } from '../../icons/Icons';
import './branding.css';

export const Branding: FC = () => {
	return (
		<div className="branding" role="img" aria-label="Brand">
			<span className="branding__logo">
				<LogoIcon className="branding__logo-svg" aria-hidden={true} />
			</span>
		<div className="branding__title-wrap" style={{ width: '168px', height: '32px' }}>
			<span className="branding__title" style={{ width: '161px', height: '24px' }}>ServiceName</span>
		</div>
		</div>
	);
};

export default Branding;

