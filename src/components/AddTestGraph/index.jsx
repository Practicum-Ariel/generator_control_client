import React, {useContext, useState} from "react";
import style from "./style.module.css";
import LineGraph from "../LineGraph";
import PopUpSimulator from "../PopUpSimulator";
import {PopupContext} from "../../context";

export default function index() {
  const {setPopupContent} = useContext(PopupContext);

  // {graphTyp: [], scenario: {time: "", temp: "", vibre: "", saound: ""}},
  const [fakeData, setFakeData] = useState([]);
  const data = [
    {
      name: "ממוצע",
      points: [
        {x: 22, y: 20},
        {x: 10, y: 40},
        {x: 23, y: 61},
        {x: 30, y: 80},
        {x: 40, y: 100},
        {x: 50, y: 80},
        {x: 60, y: 60},
        {x: 70, y: 40},
        {x: 80, y: 20},
        {x: 90, y: 0},
        {x: 100, y: 20},
      ],
    },
    {
      name: "חיישן 1",
      points: [
        {x: 25, y: 25},
        {x: 30, y: 30},
        {x: 40, y: 40},
      ],
    },
    {
      name: "חיישן 2",
      points: [],
    },
    {
      name: "חיישן 3",
      points: [],
    },
  ];

  const [sensor, setSensor] = useState({
    ממוצע: false,
    "חיישן 1": false,
    "חיישן 2": false,
    "חיישן 3": false,
  });

  return (
    <>
      {/* {fakeData && } */}
      <div className={fakeData[0] ? style.main : style.emtyMain}>
        <div
          onClick={() =>
            setPopupContent(
              <PopUpSimulator setFakeData={setFakeData} fakeData={fakeData} />
            )
          }
          className={`${style.addTestGraph} ${fakeData[0] && style.add}`}
        >
          ADD
        </div>
        {fakeData[0] &&
          fakeData.map((v) => {
            return (
              <div className={style.graph}>
                <LineGraph data={data} />
                <p>temperature: {v.scenario?.time}<br/> sound: {v.scenario?.sound}<br/> vibration: {v.scenario?.vibration}<br/> temperature:{v.scenario?.temperature}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
