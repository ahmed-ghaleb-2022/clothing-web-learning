import CategoryItem from "../category-item/category-item.component";
import './direcrtory.style.scss';

const Direcrtory = ({categories}) => {
    return ( 
        <div className='direcrtory-container'>
            {categories.map((category)=>(
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
   );
}
 
export default Direcrtory;