import NavigationBar from '../navigation';
import Taxes from '../taxes/index';
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <NavigationBar/>
      <div className='content'>
        <Taxes/>
        <

      </div>
    </div>

  )
}