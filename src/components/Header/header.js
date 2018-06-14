import React from 'react';
import style from "./header.css"

import {Link} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import SideNavigation from './SideNav/side-navigation'

const Header = (props) => {
	const logo = () => (
		<Link to="/" className={style.logo}>
			<img alt="nba logo" src="/images/nba_logo.png"/>
		</Link>
	);


	const navBars = () =>
		(
			<FontAwesome
				name="bars"
			    className={style.navBars}
				onClick={props.onShowNav}

			/>
		);


	return (
		<header className={style.header}>
			<SideNavigation {...props} />
			<div className={style.headerOpt}>
				{navBars()}
				{logo()}
			</div>
		</header>
	)
};

export default Header;
