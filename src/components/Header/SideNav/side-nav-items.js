import React from 'react';
import {Link} from 'react-router-dom'

import FontAwesome from 'react-fontawesome'
import style from './side-nav-items.css'

const SideNavItems = (props) => {

	const items = [
		{
			type: style.sideNavItem,
			icon: 'home',
			text: 'Home',
			link: '/'
		},
		{
			type: style.sideNavItem,
			icon: 'file-text-o',
			text: 'News',
			link: '/news'
		},
		{
			type: style.sideNavItem,
			icon: 'play',
			text: 'Videos',
			link: '/videos'
		},
		{
			type: style.sideNavItem,
			icon: 'sign-in',
			text: 'Sign in',
			link: '/sign-in'
		},
		{
			type: style.sideNavItem,
			icon: 'sign-out',
			text: 'Sign out',
			link: '/sign-out'
		},
	];

	const showItems = () => {
		return items.map((item ,i) => {
			return (
				<div
					key={i}
					className={item.type}>
					<Link to={item.link}>
						<FontAwesome name={item.icon}/>
						{item.text}
					</Link>

				</div>
			)

		})
	};

	return (
		<div>
			{showItems()}
		</div>

	);
};

export default SideNavItems;
