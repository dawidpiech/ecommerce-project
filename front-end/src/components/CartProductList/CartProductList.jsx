import styles from "./CartProductList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.cartList}>
        <h2>Koszyk</h2>
        <div>
          {products.map((product) => {
            return (
              <CartProduct key={product.id} product={product}></CartProduct>
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
