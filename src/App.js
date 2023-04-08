import './App.css';
import NavigationBar from './components/navigation/index.jsx';
import Form from './components/form';

function App() {
  return (
    <div class="application">
      <NavigationBar/>
      <p>
      Our post tax salary calculator can help you better estimate your paystub following taxes, deductions and other garnishments. Please enter your salary and anticipated deduction and press calculate to get you estimate.
      </p>
      <Form/>
    </div>
  );
}

export default App;
