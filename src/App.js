import './index.css';
import NavigationBar from './components/navigation/index.jsx';
import Form from './components/form';


const message = "Our post tax salary calculator can help you better estimate your paystub following taxes, deductions and other garnishments. Please enter your salary and anticipated deduction and press calculate to get you estimate.";

function App() {
  return (
    <div class="application">
      <NavigationBar/>
      <div class="body">
        <span>
          {message}
        </span>
      <Form/>
      </div>
    </div>
  );
}

export default App;
