import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increase , decrease } from "./store/counterReducer";
import { InputContainer } from "./containers/InputContainer";

function AppReduxPrac() {
  return (
    <div>
      <InputContainer />
    </div>
  );
}


export default AppReduxPrac;