
import './App.css';
import PrecStateClass from "./component/PrecStateClass"
import PrecStateFunction from "./component/PrecStateFunction"
import HandlerEX from './component/ex/HandlerEx';
import HandlerFunc from './component/ex/HandlerFunc'; 

function App() {
  return (
    <div>
      <PrecStateClass name="dahyun"/>
      <PrecStateFunction />
      <HandlerEX />
      <HandlerFunc />


    </div>
  );
}

export default App;
