import React, {useContext, useState} from "react";
import style from "./style.module.css";
import { PopupContext } from '../../context';


export default function index({ fakeData, setFakeData, scenario}) {
  const graphTyp = [
    "https://cdn.corporatefinanceinstitute.com/assets/line-graph.jpg",
    "https://media.istockphoto.com/id/1345793778/vector/bar-graph-growth-and-up-arrow.jpg?s=612x612&w=0&k=20&c=s3MbVY25Vrb8YcOpdwaRNYIzVR6aI35aY9dnMKQS46Q=",
    "https://knowledge.hubspot.com/hs-fs/hubfs/column%20and%20line%20graph.png?width=544&height=401&name=column%20and%20line%20graph.png",
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
  const { setPopupContent } = useContext(PopupContext);

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
                {/* <p>{scenario}</p> */}
              </div>
            );
          })}
        </div>
      <button className={style.buttonAdd} onClick={()=>{
        setFakeData(([...fakeData,{graphTyp:graphTyp,scenario:scenario}]));
        setPopupContent(null)
      }}>הוסף</button>

      </div>
    </>
  );
}
