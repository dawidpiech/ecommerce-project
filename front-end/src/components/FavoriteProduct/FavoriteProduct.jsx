import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import styles from "./FavoriteProduct.module.css";

export function FavoriteProduct({ product }) {
  return (
    <div className={styles.favoriteProduct}>
      <img src={product.photos[0]} alt="Product image" />
      <div className={styles.favoriteProductInfo}>
        <div className={styles.topRow}>
          <h3>{`${product.brand} ${product.productName}`}</h3>
          <p>{product.pricePLN} zł</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena:</span>
          {product.pricePLN}
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} alt="Remove icon" /> Usuń
          </button>
          <button>
            <img src={BAG_ICON} alt="Bag icon" /> Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
