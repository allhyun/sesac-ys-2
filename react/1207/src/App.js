import UseMemoEx from './components/UseMemo';
import UseCallbackEx from './components/UseCallback';
import UseCallbackEx2 from './components/UseCallback2';
import './App.css';
import { useState} from 'react'
import UseReducerEx from './components/UseReducer';
import CustomHookEx from './components/CustomHookEx';


function App() {
  const [postId, setPostId]= useState(1)
  return (
    <div > 
      <UseMemoEx />

      <hr />

      <UseCallbackEx />
      <hr/>
      <UseCallbackEx2 postId={postId}/>
      <button onClick ={()=>setPostId(postId +1)}>+1</button>

      <UseReducerEx />

      <CustomHookEx />
    </div>
  );
}

export default App;
