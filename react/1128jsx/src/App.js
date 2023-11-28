import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FuncPropsEx from './components/FunctionPropsEx';

function App() {
  const a = "8"
  const b = "5"
  return (<>
    {/* <div >
      <FuncComponent></FuncComponent>
      <ClassComponent></ClassComponent>
      </div>

      <div>
        <h2>{3+5 == 8 ? "정답" : "오답 "}</h2>
        <h1>{a > b && "a가b보다 큽니다"}</h1>
      </div>

      <br />

      <div>
        <div className ="pj-css">HELLO WORLD</div>
        아이디:<input></input><br/>
        비밀번호:<input></input>
      </div> */}
      <FuncPropsEx title="SeSAC" content="hello world" number={5}></FuncPropsEx>
      {/* number="5" 는 숫자로 가져가지지않는다 ! 숫자로 받고싶으면 {} 안에 넣어야함 */}
      <FuncPropsEx content="hello world" number={5}></FuncPropsEx>

      <FuncComponent>
        <div>
          
        </div>
      </FuncComponent>
      </>
  );
}

export default App;
