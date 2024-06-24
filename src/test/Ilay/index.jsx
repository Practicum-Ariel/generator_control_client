import { useContext } from "react";
import { PopupContext } from "../../context";
import Form from "./Form";
import TestPopupContent from "./TestPopup";

export default function Ilay({}) {
  const { popupContent, setPopupContent } = useContext(PopupContext);

  return (
    <>
      <div>Your Popup Content Here</div>
      <button onClick={() => setPopupContent(<Form />)}>2</button>
      <button onClick={() => setPopupContent(<TestPopupContent />)}>1</button>
    </>
  );
}
