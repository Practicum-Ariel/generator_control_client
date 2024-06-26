import React from "react";
import style from "./style.module.css";

// TODO // לאסוף את הINPUT ולייצר בקשה לשרת
export default function index({title, inputArr = []}) {
  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  };
  return (
    <div className={style.main}>
      <h1 className={style.h1}>{title}</h1>
      <form onSubmit={handlesubmit} className={style.form} action="">
        <div className={style.inputs}>
          {inputArr.map((v) => {
            return (
              <div className={style.test}>
                <label className={style.label} htmlFor={v.label}>
                  {v.label}
                </label>
                <p className={style.p}>{v.guidelines}</p>
                <div className={style.fin}>
                  {v.typ == "checkbox" ? (
                    <div className={style.checkbox}>
                      <input type="checkbox"  id={v.label} name={v.label} /> <p>בוצע</p>
                    </div>
                  ) : (
                    <input
                    id={v.label}
                    name={v.label}
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
              name='text'
                className={style.input}
                type="text"
                placeholder="תאריך בדיקה"
              />
            </div>
          </div>
        </div>
      <button type="submit">צור בדיקה</button>
      </form>
    </div>
  );
}
