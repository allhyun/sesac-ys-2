import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Input1 />
    </div>
  );
}

function Input1() {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber(number + {number});
  const decrease = () => setNumber(number - {number});
  return (
    <div className="box">
      <h2>코딩온 은행</h2>
      <h3>잔액: {number}원</h3>
      <Box2 number={number} increase={increase} decrease={decrease} />
    </div>
  );
}

function Box2(props) {
  const { number, increase, decrease } = props;
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <Box3 number={number} increase={increase} decrease={decrease} />
    </div>
  );
}

function Box3(props) {
  return (
    <div className="box">
      <Box4
        number={props.number}
        increase={props.increase}
        decrease={props.decrease}
      />
    </div>
  );
}

function Box4({ number, increase, decrease }) {
  return (
    <div className="box">
      <h3>number: {number}</h3>
      <button onClick={increase}>입금</button>
      <button onClick={decrease}>출금</button>
    </div>
  );
}

export default App;