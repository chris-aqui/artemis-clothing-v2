// @ts-nocheck // todo: remove this line when TS error is fixed
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Shop = () => {
	return (
		<Fragment>
			<div>I am a shop</div>
			<Outlet />
		</Fragment>
	)
};

export default Shop;