import React, {useEffect} from "react";
import style from "./style.module.css";
import {useParams, useSearchParams} from "react-router-dom";
export default function index() {
  const fakeData = [
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "warning"},
      generator2: {value: "12", status: "succcess"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "danger"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "danger"},
      generator2: {value: "12", status: "succcess"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "warning"},
      generator2: {value: "12", status: "warning"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "warning"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "danger"},
      generator2: {value: "12", status: "danger"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "succcess"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "danger"},
      generator2: {value: "12", status: "succcess"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "warning"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "warning"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "succcess"},
      generator2: {value: "12", status: "warning"},
    },
    {
      sensorsName: "bla bla",
      generator1: {value: "12", status: "danger"},
      generator2: {value: "12", status: "succcess"},
    },
  ];
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setSearchParams({filter: "jgcdktu-khfuy"});
  }, []);
  const value = searchParams.get("filter");
const genertors = value.split('-')
  console.log(genertors);
  return (
    <div className={style.main}>
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
                <td className={style.sensors}>{v.sensorsName}</td>
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
