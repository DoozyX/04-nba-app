import React from 'react';
import Slick from 'react-slick'
import {Link} from 'react-router-dom'

import style from './slider.css'

const SliderTemplates = (props) => {

	let template = null;

	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		...props.settings
	};

	switch (props.type) {
		case ('featured'):
			template = props.data.map((item, i) => {
				return (
					<div key={i}>
						<div className={style["featured-item"]}>
							<div
								className={style["featured-image"]}
								style={{
									background: `url(../images/articles/${item.image})`
								}}
							>
								<Link
									to={`/articles/${item.id}`}
								>
									<div className={style["featured-caption"]}>
										{item.title}
									</div>
								</Link>

							</div>
						</div>
					</div>
				)
			});
			break;
		default:
			template = null;
	}

	return (
		<Slick {...settings}>
			{template}
		</Slick>
	);
};

export default SliderTemplates;
