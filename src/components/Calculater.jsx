import { useReducer } from "react";
import reducer from "./reducer";
import Output from "./Output";
import Buttons from "./Buttons";

const Calculater = () => {
  const [{ currentOperand, previousOPerand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className='calculater-grid'>
      <Output
        currentOperand={currentOperand}
        previousOPerand={previousOPerand}
        operation={operation}
      />
      <Buttons dispatch={dispatch} />
    </div>
  );
};
export default Calculater;
