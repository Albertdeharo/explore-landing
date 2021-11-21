import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Text from './components/textBox';
import aviator from './../src/assets/aviator.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section1/>
      <div className="section-container">
        <img src={aviator} alt="" />
      </div>
      <div className="spanTest">
        <span >123</span>
      </div>
      <Text/>
      <Section2/>
      <Text/>
      <Section3/>
    </div>
  );
}

export default App;
