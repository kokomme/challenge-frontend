import React from 'react';
import Title from './title/Title';
import TextArea from './text-area/TextArea';
import './ContentArea.css';

const ContentArea: React.FC = () => {
	return (
		<section className="content-area">
			<Title>坊ちゃん</Title>
			<TextArea>
				<p>
					親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。
				</p>
			</TextArea>
		</section>
	);
};

export default ContentArea;

