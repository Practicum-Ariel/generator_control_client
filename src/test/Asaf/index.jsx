import React, { useState } from "react";
import style from "./style.module.css";
import GraphTypeSelector from "../../components/GraphTypeSelector";
import AddTestGraph from "../../components/AddTestGraph";
import {TiArrowSortedDown} from "react-icons/ti";
import {MdOutlineArrowLeft} from "react-icons/md";

export default function Asaf() {
  const [first, setfirst] = useState([
    {senrio: {time: "", temp: "", vibre: "", saound: ""}, typ: []},
  ]);
  return (
    <div className={style.main}>
      <AddTestGraph textOnGraph={'bla bla bla'} />
      {/* <GraphTypeSelector sanerio={"jbiuguiol kjbugo87go87"} /> */}
    </div>
  );
}
