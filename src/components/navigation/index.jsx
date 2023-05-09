import React, { useState } from 'react';


export default function NavigationBar() {

  const [showMenu, setShowMenu] = useState(false);

const  handleClick = () => {
  setShowMenu(true);
};

  return(
    <nav className="navigation">
      <h2>PayCheque</h2>
      <ul>
        <li>
          <img alt="Hamburger-menu" src='images/hamburger-menu.png' width="20px" height="20px" onClick={handleClick}/>
        </li>
      </ul>
    </nav>
  )

}