import React from "react";
import style from "./style.module.css";
import TechVisitForm from "../../components/TechVisitForm";
import {TiArrowSortedDown} from "react-icons/ti";
import {MdOutlineArrowLeft} from "react-icons/md";

export default function Asaf() {
  // TODO // כפתור גדול // גאפ לטקסט האפור 
  return (
    <>
      <div className={style.main}>
        <TechVisitForm
          inputArr={[
            {
              typ: "checkbox",
              guidelines: "sjdbvkjlsb sajvdbbol",
              label: "blaa",
            },
            {typ: "text", guidelines: "sjdbvkjlsb sajvdbbol", label: "x"},
            // {typ: "number", guidelines: "sjdbvkjlsb sajvdbbol", label: "blaa"},
          ]}
          title={"בדיקת טכנאי."}
        />
      </div>
    </>
  );
}
