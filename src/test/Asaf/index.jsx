import React from "react";
import style from "./style.module.css";
import AlertComponent from "../../components/AlertComponent";
import {TiArrowSortedDown} from "react-icons/ti";
import {MdOutlineArrowLeft} from "react-icons/md";

export default function Asaf() {
  return (
    <>
      <div className={style.main}>
        <AlertComponent
          status={"succcess"}
          title={"חישן לא תקן"}
          context={"פרטי אזהרה ראשונית."}
          handleClick={"handleClick"}
        />



        <AlertComponent
          status={"succcess"}
          title={"חישן לא תקן"}
          context={
              "אזהרה: נא להימנע מהשימוש במכונות כבדות בזמן פעולה. יש להשתמש בהן בזהירות רבה ולהימנע ממגע עם חלקים חמים או חדים. כל שימוש לא תקין עשוי לגרום לפציעות קשות."
            }
           
          handleClick={"handleClick"}
        />
        
        <AlertComponent
          status={"danger"}
          title={"חישן לא תקן"}
          context={"פרטי אזהרה ראשונית."}
          handleClick={"handleClick"}
        />
      </div>
    </>
  );
}
