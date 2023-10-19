import React, {useContext, useState} from "react";
import { ApplicationDataContext } from "../../App"; // Since state was create in useContext we'll need this to access state
import NavigationBar from '../navigation';
import Taxes from '../taxes/index';
import ShowCalculation from "../output";
import "./main.css";
import ShowTaxBracket from "../ShowTaxBrackets";

export default function Main() {

  const {state, setState} = useContext(ApplicationDataContext);

  return (
    <div className="main" id="main">
      <NavigationBar/>
      <div className='content'>
        <div className="left-panel">
          <Taxes state={state} setState={setState}/>
          <ShowTaxBracket state={state}/>
        </div>
        <ShowCalculation state={state} setState={setState}/>
      </div>
    </div>

  )
}