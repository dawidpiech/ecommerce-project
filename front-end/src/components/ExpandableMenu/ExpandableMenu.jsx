<<<<<<< HEAD
import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
export function ExpandableMenu() {
  const activePath = "odziez";
=======
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";
import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  const activePath = "odziez";

>>>>>>> 5355df14c1bd1d06b317bd48e4e1ea679f6f0bc3
  return (
    <div className={styles.expandableMenu}>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.categoryName}{" "}
                <img
                  src={ARROW_ICON}
<<<<<<< HEAD
=======
                  alt="Arrow icon"
>>>>>>> 5355df14c1bd1d06b317bd48e4e1ea679f6f0bc3
                  className={
                    activePath === category.path ? styles.expanded : ""
                  }
                />
              </NavLink>
              {activePath === category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink to={subcategory.path}>
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
