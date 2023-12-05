
import './App.css';
import ListMap from './component/ListMap'
import FuncRef from './component/FuncRef'
import ClassRef from './component/ClassRef'
import ScrollBox from './component/ScrollBox';


function App() {
  return (
    <div >
      <ListMap />

      <br />
      <h2> REF</h2>
      <FuncRef />

      <br></br>
      <h2>class ref</h2>
      <ClassRef />

      <br />
      <h2> ScrollBox</h2>
      <ScrollBox />
   
    </div>
  );
}

export default App;
