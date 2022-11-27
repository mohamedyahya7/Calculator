import React from "react";
const Output = ({ previousOPerand, operation, currentOperand }) => {
  const integerFormater = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  });

  function formatOP(op) {
    if (op == null) return;
    const [inte, deci] = op.split(".");
    if (deci == null) return integerFormater.format(inte);
    return `${integerFormater.format(inte)}.${deci}`;
  }
  return (
    <div className='output'>
      <div className='previous-operand'>
        {formatOP(previousOPerand)} {operation}
      </div>
      <div className='current-operand'>{formatOP(currentOperand)}</div>
    </div>
  );
};

export default Output;
