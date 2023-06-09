import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";




const CategoriesPreview = () => {
    const { categoryMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
}
 
export default CategoriesPreview;