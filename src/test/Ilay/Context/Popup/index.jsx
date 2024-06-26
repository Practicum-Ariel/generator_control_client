import styles from "./style.module.css";
import { TiDeleteOutline } from "react-icons/ti";
import { PopupContext } from "./PopupContext";
import { useContext } from "react";

export default function Popup({ children }) {
  const { setPopupContent } = useContext(PopupContext);

  return (
    <div className={styles.popupOverlay} onClick={() => setPopupContent(null)}>
      <div className={styles.popupContainer} onClick={(e) => e.stopPropagation()}>
        
          <TiDeleteOutline
            className={styles.popupClose}
            onClick={() => setPopupContent(null)}
          />
        <div
          className={styles.popupContent}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
