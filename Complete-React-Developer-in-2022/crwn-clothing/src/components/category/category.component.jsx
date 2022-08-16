import './category.styles.scss';
import CategoryItemComponent from "../category-item/category-item.component";


const CategoryComponent = ({categories}) => {
    return (
        <div className="categories-container">
            {
                categories.map(({title, id, imageUrl}) => {
                    return (
                        <CategoryItemComponent key={id} imageUrl={imageUrl} title={title}/>
                    )
                })
            }
        </div>
    )
}

export default CategoryComponent;