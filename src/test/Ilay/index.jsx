import { useState } from "react";
import styles from "./style.module.css";
import { PopupContext } from "./Context/Popup/PopupContext";
import TestPopupContent from "./Context/Popup/TestPopup";
import Form from "./Form";
import Popup from "./Context/Popup";

export default function Ilay() {
  const [popupContent, setPopupContent] = useState(null);

  return (
    <>
      Ilay
      <PopupContext.Provider
        value={{
          popupContent,
          setPopupContent,
        }}
      >
        <div className={styles.Ilay}>
          {popupContent && <Popup> {popupContent} </Popup>}
          <div>Your Popup Content Here</div>
          <button onClick={() => setPopupContent(<Form />)}>2</button>
          <button onClick={() => setPopupContent(<TestPopupContent />)}>
            1
          </button>
        </div>
      </PopupContext.Provider>
    </>
  );
}
