import './index.css';
import NavigationBar from './components/navigation/index.jsx';
import Form from './components/form';
import Footer from './components/footer';
// import { createContext, useContext } from 'react';
import useApplicationData from './hooks/useApplicationData';


const message = "Our post tax salary calculator can help you better estimate your paystub following taxes, deductions and other garnishments. Please enter your salary and anticipated deduction and press calculate to get you estimate.";

function App() {

  const {state, setState} = useApplicationData();

  console.log(state);
  return (
    <div className="application">
      <NavigationBar/>
      <div className="body">
        <h1>Paycheque Calculator</h1>
        <span>
          {message}
        </span>
      <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
