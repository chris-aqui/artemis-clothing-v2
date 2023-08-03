import './category-item.styles.scss';
import { Category } from '../../types/types';

// Define the props that the component will receive
interface CategoryItemProps {
	category: Category;
}

// Define the CategoryItem component
const CategoryItem = ({ category }: CategoryItemProps) => {
	// Destructure the imageUrl and title from the category prop
	const { imageUrl, title } = category;
	return (
		// Render the component
		<div className='category-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='category-body-container'>
				<h2>Shop {title} Now</h2>
				{/* <p>Shop Now</p> */}
			</div>
		</div>
	);
};

// Export the CategoryItem component as the default export
export default CategoryItem;