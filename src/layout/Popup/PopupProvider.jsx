import { PopupContext } from "../../context/index";
import { useState } from "react";
import Popup from "./index";

/**
 * @description popup provider component takes other components as children and display them as the as popup content
 * @todo to insert popup content in the popup do setPopupContent(userComponent)
 * @example <button onClick={() => setPopupContent(<userComponent/>)}></button>
 * @returns
 */

export default function PopupProvider({ children }) {
  const [popupContent, setPopupContent] = useState(null);

  return (
    <>
      <PopupContext.Provider
        value={{
          popupContent,
          setPopupContent,
        }}
      >
        {children}
        <div>{popupContent && <Popup> {popupContent} </Popup>}</div>
      </PopupContext.Provider>
    </>
  );
}
