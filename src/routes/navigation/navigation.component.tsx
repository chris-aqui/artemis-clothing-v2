// @ts-nocheck // todo: remove this line when TS error is fixed
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import DogLogo from '../../assets/apollo-artemis-logo.png'

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<div>
						<img src={DogLogo} alt="My Logo" style={{ width: '200px' }} />
					</div>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='nav-link' to='/sign-in'>
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;