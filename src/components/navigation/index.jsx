import './nav.css';
import { useState } from 'react';


export default function NavigationBar(props) {

  const [activeButton, setActiveButton] = useState("buttonOne");

  const handleButtonOne = ()=> {
    setActiveButton("buttonOne");
  };

  // Sets the active button which triggers whether the button shows using a ternary statement
  const handleButtonTwo = ()=> {
    setActiveButton("buttonTwo");
  };

  return(
    <nav className="navigation">
      <h2 className='nav-title'><a href="/">PayCheque</a></h2>

      <ul>
        {/* Used along with state to create an either or button see handlebutton functions */}
        <li className={activeButton === "buttonOne" ? "active" : "disabled"} onClick={handleButtonOne}>Tax Calculator</li>
        <li className={activeButton === "buttonTwo" ? "active" : "disabled"} onClick={handleButtonTwo}>Mortgage Calculator</li>
      </ul>
  
    </nav>
  )

}