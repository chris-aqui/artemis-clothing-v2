import React from 'react';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';
import { Category } from '../../types/types';

interface DirectoryProps {
	categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
	return (
		<div className='directory-container'>
			{categories.map((category: Category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;