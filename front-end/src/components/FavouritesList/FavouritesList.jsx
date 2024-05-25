import styles from "./FavouritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";

export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.favoritesList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return (
              <FavoriteProduct
                key={product.id}
                product={product}
              ></FavoriteProduct>
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
