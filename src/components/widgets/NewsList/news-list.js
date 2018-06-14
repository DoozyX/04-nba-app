import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom'
import axios from 'axios'

import {API_URL} from "../../../config";
import style from "./news-list.css"

class NewsLit extends Component {

	state = {
		items: [],
		start: this.props.start,
		end: this.props.amount + this.props.start,
		amount: this.props.amount
	};

	componentDidMount() {
		axios.get(`${API_URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
			.then(response => {
				this.setState({
					items: [...this.state.items, ...response.data]
				});

			})
	}

	renderNews = (type) => {
		let template;

		switch (type) {
			case('card'):
				console.log(this.state.items);
				template = this.state.items.map((item, i) => (
					<div key={i}>
						<div className={style["news-list-item"]}>
							<Link to={`/articles/${item.id}`}>
								<h2>{item.title}</h2>
								{console.log(item.title)}
							</Link>

						</div>
					</div>
				));
				break;
			default:
				template = null;
		}

		//console.log(template);

		return template;
	};

	render() {
		//console.log(this.state.items);

		return (
			<div>
				{this.renderNews(this.props.type)}
			</div>
		)
	}
}

export default NewsLit;
