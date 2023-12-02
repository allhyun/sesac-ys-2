
import './App.css';
import PrecStateClass from "./component/PrecStateClass"
import PrecStateFunction from "./component/PrecStateFunction"
import HandlerEX from './component/ex/HandlerEx';
import HandlerFunc from './component/ex/HandlerFunc'; 
import Practice from './component/Practice'; 


function App() {
  return (
    <div>
      <PrecStateClass name="dahyun"/>
      <PrecStateFunction />
      <HandlerEX />
      <HandlerFunc />

      <Practice/>


    </div>
  );
}

export default App;
