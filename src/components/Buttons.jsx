import React from "react";

import DigetButton from "./digitButton";
import OperationButton from "./OperationButton";
import Button from "./Button";
import ACTIONS from "./ACTIONS";

const Buttons = ({ dispatch }) => {
  return (
    <>
      <Button
        dispatch={dispatch}
        name={"AC"}
        type={ACTIONS.CLEAR}
        cName={"span-two"}
      />
      <Button dispatch={dispatch} name={"DEL"} type={ACTIONS.DELETE_DIGIT} />
      <OperationButton operation='÷' dispatch={dispatch} />
      <DigetButton digit='1' dispatch={dispatch} />
      <DigetButton digit='2' dispatch={dispatch} />
      <DigetButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigetButton digit='4' dispatch={dispatch} />
      <DigetButton digit='5' dispatch={dispatch} />
      <DigetButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigetButton digit='7' dispatch={dispatch} />
      <DigetButton digit='8' dispatch={dispatch} />
      <DigetButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigetButton digit='.' dispatch={dispatch} />
      <DigetButton digit='0' dispatch={dispatch} />
      <Button
        dispatch={dispatch}
        name={"="}
        type={ACTIONS.EVALUATE}
        cName={"span-two"}
      />
    </>
  );
};

export default Buttons;
