
import './App.css';
import Chatting1 from './components/Chatting1';
import Chatting2 from './components/Chatting2';

import Practice1 from './components/Practice1';

function App() {
  return (
    <div >
      <Practice1 />
      <hr/>
            {/* 실습 2-1,2-2,*/}

      <Chatting1 />

      <hr/>
      {/* 실습 3-1,3-2,3-3 */}
      <Chatting2 />
    </div>
  );
}

export default App;
