import { useState } from "react";
import Popup from "./Context/Popup";

/**
 * @description popup provider component takes other components as children and display them as the as popup content
 * @todo to insert popup content in the popup do setPopupContent(userComponent)
 * @example <button onClick={() => setPopupContent(<userComponent/>)}></button>
 * @returns
 */
export default function PopupProvider() {
  const [popupContent, setPopupContent] = useState(null);

  return (
    <>
      <div>{popupContent && <Popup> {popupContent} </Popup>}</div>
    </>
  );
}
