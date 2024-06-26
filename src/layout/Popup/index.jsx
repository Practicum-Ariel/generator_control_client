import styles from "./style.module.css";
import { TiDeleteOutline } from "react-icons/ti";
import { Component, useContext } from "react";
import { PopupContext } from "../../context";

/**
 * 
 * @param {Component} params can be of any type
 * @summary popup component takes other components as children and display them as the as popup content 
 * @returns 
 */
export default function Popup({ children }) {
  const { setPopupContent } = useContext(PopupContext);

  return (
    <div className={styles.popupOverlay} onClick={() => setPopupContent(null)}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()}
      >
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
