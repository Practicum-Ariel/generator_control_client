import { createContext, useState } from "react";

export const popUpContext = createContext({ handlePopupOpen: null });

export default function Popup({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handlePopupOpen = () => {};

  return (
    <popUpContext.Provider value={{ handlePopupOpen }}>
      {isPopupOpen ? isPopupOpen : null}
    </popUpContext.Provider>
  );
}
