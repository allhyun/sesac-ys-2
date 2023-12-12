import { useSelector, useDispatch } from "react-redux";
import{Input4} from "../components/PracInput"
import { increase,decrease } from "../store/counterReducer";

export function InputContainer() {
  const number = useSelector((state) => state.counter.number);
  const isData = useSelector((state) => state.isData);
  const dispatch = useDispatch();
  const counterIncrease = () => dispatch(increase());
  const counterDecrease = () => dispatch(decrease());
  const isDataChange = () => dispatch({ type: "CHANGE" });

  return (
    <Input4
      number={number}
      isData={isData}
      counterIncrease={counterIncrease}
      counterDecrease={counterDecrease}
      isDataChange={isDataChange}
    />
  );
}
