import React, {useContext, useState} from "react";
import { ApplicationDataContext } from "../../App"; // Since state was create in useContext we'll need this to access state
import NavigationBar from '../navigation';
import Taxes from '../taxes/index';
import ShowCalculation from "../output";
import "./main.css";

export default function Main() {

  const {state, setState} = useContext(ApplicationDataContext);
  const {view, setView} = useState("tax"); // State to manage colour of the link based which component is being viewed

  return (
    <div className="main" id="main">
      <NavigationBar view={view}/>
      <div className='content'>
        <Taxes state={state} setState={setState}/>
        <ShowCalculation state={state} setState={setState}/>

      </div>
    </div>

  )
}