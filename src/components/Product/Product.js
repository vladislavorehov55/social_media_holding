import ProductAppearance from "./ProductAppearance/ProductAppearance";
import styles from "./Product.module.css"
import ProductDescription from "./ProductDascription/ProductDescription";

const Product = () => {
    return (
        <div className={styles.wrap}>
            <ProductAppearance/>
            <ProductDescription/>
        </div>
    )
}
export default Product