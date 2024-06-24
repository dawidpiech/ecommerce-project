import REMOVE_ICON from "../../assets/remove.svg";
import styles from "./CartProduct.module.css";

export function CartProduct({ product }) {
  return (
    <div className={styles.cartProduct}>
      <img src={product.photos[0]} alt="Product image" />
      <div className={styles.cartProductInfo}>
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
        </div>
      </div>
    </div>
  );
}
