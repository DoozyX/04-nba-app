import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Layout from './hoc/Layout/layout'
import Home from "./components/Home/home"

const Routes = (props) => {
	return (
		<Layout>
			<Switch>
				<Route to={"/"} component={Home}/>
			</Switch>
		</Layout>
	);
};

export default Routes;
