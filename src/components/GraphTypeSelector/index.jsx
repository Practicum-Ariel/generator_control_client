import React, {useState} from "react";
import style from "./style.module.css";

export default function index({sanerio}) {
  const graphTyp = [
    "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg",
    "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg",
    "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg",
  ];
  const [theChosenGraphsTyp, setTheChosenGraphsTyp] = useState([]);
  //   console.log(theChosenGraphsTyp);

  let toDeletFromArr = async (toDelet) => {
    setTheChosenGraphsTyp((prev) => prev.filter((v) => v !== toDelet));
    console.log(toDelet);
  };
  const hendaleClick = (v) => {
    theChosenGraphsTyp.includes(v)
      ? toDeletFromArr(v)
      : setTheChosenGraphsTyp([...theChosenGraphsTyp, v]);

    // const test = !theChosenGraphsTyp.includes(v);
    // test ? setHendaleStyle(style.theChosen) : setHendaleStyle("");
  };

  return (
    <>
      {console.log(theChosenGraphsTyp)}
      {/* בחזור מעבירים לו את ההקןמפוננטה ששמואל בונה עם תרחיש ID */}
      <button className={style.button}>חזור</button>
      <div className={style.main}>
        <div className={style.AllGraphs}>
          {graphTyp.map((v) => {
            return (
              <div
                key={v}
                className={`${style.graphs}
               ${theChosenGraphsTyp.includes(v) ? style.theChosen : ""}
               `}
                onClick={() => hendaleClick(v)}
              >
                <img className={style.img} src={v} alt="" />
                <p>{sanerio}</p>
              </div>
            );
          })}
        </div>
      <button className={style.buttonAdd}>חזור</button>

      </div>
    </>
  );
}
