import logo from './logo.svg';
import './App.css';
import ApiCall from './components/ApiCall';
import DependentState from './components/DependentState';
import CountdownTimer from './components/CountdownTimer';
import InputDebounce from './components/InputDebounce';
import ThemeToggle from './components/ThemeToggle';
import ScrollPosition from './components/ScrollPosition';
import Visibility from './components/Visibility';

function App() {
  return (
    <div className="App">
      <ApiCall/>
      <DependentState/>
      <CountdownTimer/>
      <InputDebounce/>
      <ThemeToggle/>
      <ScrollPosition/>
      <Visibility/>

    </div>
  );
}

export default App;
