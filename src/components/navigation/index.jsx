import './nav.css';


export default function NavigationBar(props) {

  return(
    <nav className="navigation">
      <h2 className='nav-title'><a href="/">PayCheque</a></h2>

      <ul>
        <li>Tax Calculator</li>
        <li>Mortgage Calculator</li>
      </ul>
  
    </nav>
  )

}