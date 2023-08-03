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
			imageUrl: 'https://i.ibb.co/K73JQvT/dog-1.jpg',
		},
		{
			id: 2,
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/7Y36S1m/dog-2.jpg',
		},
		{
			id: 3,
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/nrLMXH8/dog-3.jpg',
		},
		{
			id: 4,
			title: 'womens',
			imageUrl: 'https://i.ibb.co/2gcv6DM/dog-4.jpg',
		},
		{
			id: 5,
			title: 'mens',
			imageUrl: 'https://i.ibb.co/pyYkCXD/dog-5.jpg',
		},
	];

	return (
		<div>
			<Directory categories={categories} />
			<Outlet />
		</div>
	)
};

export default Home;