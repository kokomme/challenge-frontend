
import React from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import EditButton from './edit-button/EditButton';
import './ContentArea.css';

const ContentArea: React.FC = () => {
	const handleStartEdit = () => {
		console.log('Edit clicked');
	};

	return (
		<section className="content-area">
			<div className="content-header">
				<Title>坊ちゃん</Title>
				<div className="header-actions">
					<EditButton onClick={handleStartEdit} />
				</div>
			</div>

			<div className="textarea-wrapper">
				<TextArea>
					<p>
						親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
					</p>
				</TextArea>
				<div className="textarea-actions">
					<EditButton onClick={handleStartEdit} />
				</div>
			</div>
		</section>
	);
};

export default ContentArea;

