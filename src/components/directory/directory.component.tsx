import './directory.styles.scss';
import { Category } from '../../types/types';
import CategoryItem from '../category-item/category-item.component';

// Define the props that the component will receive
interface DirectoryProps {
	categories: Category[];
}

// Define the Directory component
const Directory = ({ categories }: DirectoryProps) => {
	return (
		// Render the component
		<div className='directory-container'>
			{categories.map((category: Category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

// Export the Directory component as the default export
export default Directory;