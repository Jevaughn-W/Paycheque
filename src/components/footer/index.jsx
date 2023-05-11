import React from 'react';


export default function Footer() {

  return(
    <footer className="footer">
      <ul>
         
          <li>
            <a href="https://github.com/Jevaughn-W" target="_blank">
              <img
                src='images/social.png'
                width={'30px'}
                height={'30px'}
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jevaughn-williams/" target="_blank">
              <img
                src='images/linkedin.png'
                width={'30px'}
                height={'30px'}
              />
            </a>
          </li>
          <li>
            <a href="mailto: jevaughn.williamsx@gmail.com">
              <img
                src='images/gmail.png'
                width={'30px'}
                height={'30px'}
              />
            </a>
          </li>
      </ul>
    </footer>
  )

}