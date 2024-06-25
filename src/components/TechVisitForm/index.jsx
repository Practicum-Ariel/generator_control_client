import React from "react";
import style from "./style.module.css";


// TODO // לאסוף את הINPUT ולייצר בקשה לשרת
export default function index({title, inputArr = []}) {
  console.log(inputArr);
  return (
    <div className={style.main}>
      <h1 className={style.h1}>{title}</h1>
      <form className={style.form} action="">
        <div className={style.inputs}>
          {inputArr.map((v) => {
            return (
              <div className={style.test}>
                <label className={style.label} htmlFor="">
                  {v.label}
                </label>
                <p className={style.p}>{v.guidelines}</p>
                <div className={style.fin}>
                  {v.typ == "checkbox" ? (
                    <div className={style.checkbox}>
                      <input type="checkbox" /> <p>בוצע</p>
                    </div>
                  ) : (
                    <input
                      className={style.input}
                      placeholder={v.placeholder}
                      type={v.typ}
                    />
                  )}
                </div>
              </div>
            );
          })}
          <div className={style.test}>
            <label className={style.label} htmlFor="">
              טקסט חופשי
            </label>
            {/* <p className={style.p}>Lorem ipsum dolor, sit amet consectetur.</p> */}
            <div className={style.fin}>
              <textarea
                className={style.input}
                type="text"
                placeholder="תאריך בדיקה"
              />
            </div>
          </div>
        </div>
      </form>
      <button type="submit">צור בדיקה</button>
    </div>
  );
}
