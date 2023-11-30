import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import FuncPropsEx from './components/FunctionPropsEx';
import Section from './components/Section';
import ClassPropsEx from './components/ClassProps';
import FunctionPE from './components/FunctionPE';
import ClassPE from './components/ClassPE';
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




      <ClassPropsEx title="class" content="contnent" number={6}></ClassPropsEx>

      <Section title="SeSAC 영역">
        <div>SeSAC 영역의 CONTENT입니다</div>
      </Section>


      <Section title="코딩온 영역" >
       <h5>코딩온 영역의 content입니다</h5>
        </Section>

      {/* 실습 */}
     <FuncPropsEx></FuncPropsEx>
      <br>
      </br>
      <FunctionPE title="나의 하루는 4시 40분에 시작된다" author="김유진" price={13500} type="자기계발서"></FunctionPE> 
      <ClassPE text="집에갈래" valid="안녕"></ClassPE>

      </>
  );
}

export default App;
