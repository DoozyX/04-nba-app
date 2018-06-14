import React from 'react';
import {Link} from 'react-router-dom'

import style from './footer.css'
import {CURRENT_YEAR} from "../../config";


const Footer = (props) => (
	<footer className={style.footer}>
		<Link to="/" className={style.logo}>
			<img alt="nba logo" src="/images/nba_logo.png"/>
		</Link>
		<div className={style.right}>
			@Doozy {CURRENT_YEAR} All rights reserved.
		</div>
	</footer>
);


export default Footer;
