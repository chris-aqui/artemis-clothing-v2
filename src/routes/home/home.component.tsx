// @ts-nocheck // todo: remove this line when TS error is fixed
import Directory from '../../components/directory/directory.component';
import '../../categories.styles.scss';
import { Category } from '../../types/types.js';
import { Outlet } from 'react-router-dom';

const Home = () => {
	const categories: Category[] = [
		{
			id: 1,
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
			id: 4,
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
			id: 5,
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		},
	];

	return (
		<div>
			<Directory categories={categories} />
			<Outlet /> // ts error on outlet
		</div>
	)
};

export default Home;