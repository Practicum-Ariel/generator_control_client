import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import BoxSensorType from "../BoxSensorType";
export default function index() {
  const [selectors, setSelectors] = useState({ time: "", senser: "" });
  let [searchParams, setSearchParams] = useSearchParams();

  const fakeData = [
    {
      compareName: "טמפ'-ממוצע- נורמלי",
      generator1: { value: "89", status: "warning" },
      generator2: { value: "70", status: "succcess" },
    },
    {
      compareName: "טמפ'-ממוצע- קל",
      generator1: { value: "80", status: "succcess" },
      generator2: { value: "87", status: "danger" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "danger" },
      generator2: { value: "12", status: "succcess" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "warning" },
      generator2: { value: "12", status: "warning" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "succcess" },
      generator2: { value: "12", status: "warning" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "danger" },
      generator2: { value: "12", status: "danger" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "succcess" },
      generator2: { value: "12", status: "succcess" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "danger" },
      generator2: { value: "12", status: "succcess" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "succcess" },
      generator2: { value: "12", status: "warning" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "succcess" },
      generator2: { value: "12", status: "warning" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "succcess" },
      generator2: { value: "12", status: "warning" },
    },
    {
      compareName: "bla bla",
      generator1: { value: "12", status: "danger" },
      generator2: { value: "12", status: "succcess" },
    },
  ];

  useEffect(() => {

    // חילוץ פרמטרים ושמירת המזהים בסטייס

    // ביצוע בקשה עם מספרי הגנרטורים עם איזה חיישנים
    // המידע מכל בקשה שחוזר לשים בסטייס יעודי
    // 
  }, []);
  const value = searchParams.get("filter");
  const genertors = value.split("-");
  console.log(selectors);
  useEffect(() => {
    // לבצע את הבקשה לסינון מהשרת
    console.log(`?time=${selectors.time}&senser=${selectors.senser}&`);

  }, [selectors]);
  //  TO DO // STRINGRFY //ַַַַ&QWERY
  return (
    <div className={style.main}>
      <h1>השוואת גנרטורים</h1>
      <div className={style.selectors}>
        <select onChange={(e) => setSelectors({ ...selectors, senser: e.target.value })}        >
          <option>הכל</option>
          {fakeData.map((v) => (
            <option>{v.compareName}</option>
          ))}
        </select>
        <BoxSensorType setSelected={(e) => setSelectors({ ...selectors, time: e.target.value })} types={[{text:"יום",value :"day"},{text:"שבוע",value :"week"},{text:"חודש",value :"month"}]} selected={"day"} />
      </div>
      <table>
        <thead>
          <tr>
            <th className={style.sensors}>שמות הגנרטורים</th>
            <th className={`${style.compare} ${style.sensorscolor}`}>
              {genertors[0]}
            </th>
            <th className={`${style.compare} ${style.sensorscolor}`}>
              {genertors[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((v, i) => {
            return (
              <tr>
                <td className={style.sensors}>{v.compareName}</td>
                <td
                  className={`${style.compare} ${style[v.generator1.status]}`}
                >
                  {v.generator1.value}
                </td>
                <td
                  className={`${style.compare} ${style[v.generator2.status]}`}
                >
                  {v.generator2.value}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
