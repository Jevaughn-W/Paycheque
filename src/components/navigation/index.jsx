import React from 'react';


export default function NavigationBar() {

  return(
    <nav className="navigation">
      <h2>PayCheque</h2>
      <ul>
          <li>
            user DP
          </li>
          <li>
            username
          </li>
          <li>
            <img alt="Hamburger-menu" src='images/hamburger-menu.png' width="20px" height="20px"/>
          </li>
      </ul>
    </nav>
  )

}