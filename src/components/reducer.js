
import ACTIONS from "./ACTIONS";

function evaluate({ currentOperand, previousOPerand, operation }) {
  const prev = +previousOPerand;
  const current = +currentOperand;
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  return computation.toString();
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (payload.digit === "0" && state.currentOperand === "0") return state;

      if (
        payload.digit === "." &&
        state.currentOperand &&
        state.currentOperand.includes(".")
      )
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOPerand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOPerand == null) {
        //const  current= state.currentOperand
        const current = String(+state.currentOperand);
        return {
          ...state,
          operation: payload.operation,
          previousOPerand:
            // current[current.length - 1] === "."
            //   ? current.slice(0, -1)
            //   :
            current,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOPerand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: null,
          overwrite: false,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.previousOPerand == null ||
        state.operation == null ||
        state.currentOperand == null
      ) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOPerand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
};
export default reducer;
