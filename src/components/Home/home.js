import React from 'react';

import NewsSlider from '../widgets/NewsSlider/news-slider'
import NewsLit from "../widgets/NewsList/news-list";

const home = () => {
	return (
		<div>
			<NewsSlider
				type='featured'
				start={0}
				amount={3}
				settings={{
					dots: false
				}}
			>

			</NewsSlider>
			<NewsLit
				type="card"
				loadMore={true}
				start={0}
				amount={3}
			/>
		</div>
	);
};

export default home;
