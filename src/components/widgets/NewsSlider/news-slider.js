import React, {Component} from 'react';
import axios from 'axios'
import SliderTemplates from "./slider-templates";

import {API_URL} from "../../../config";

class NewsSlider extends Component {
	static defaultProps = {};

	static propTypes = {};

	state = {
		news: []
	};

	componentDidMount() {
		axios.get(`${API_URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`).then( response => {
			this.setState( {
				news: response.data
			})
		})
	}


	render() {
		return (
			<SliderTemplates
				data={this.state.news}
				type={this.props.type}
				settings={this.props.settings}
			/>
		);
	}
}

export default NewsSlider;
