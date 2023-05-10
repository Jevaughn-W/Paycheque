import './index.css';
import NavigationBar from './components/navigation/index.jsx';
import Form from './components/form';
import Footer from './components/footer';
import { createContext } from 'react';
import useApplicationData from './hooks/useApplicationData';


const message = "Our post tax salary calculator can help you better estimate your paystub following taxes, deductions and other garnishments. Please enter your salary and anticipated deduction and press calculate to get you estimate.";

// Create intial context - need to export to be able to access in lower components
export const ApplicationDataContext = createContext(null);

function App() {

  // Import state from the API
  const {state, setState} = useApplicationData();
  
  return (
    <div className="application">
      <ApplicationDataContext.Provider value={{state, setState}}> {/*set the context value to the state from the API*/}
        <NavigationBar/>
        <div className="body">
          <h1>2023 Paycheque Calculator</h1>
          <span>
            {message}
          </span>
        <Form/>
        </div>
        <Footer/>
    </ApplicationDataContext.Provider>
    </div>
  );
}

export default App;
