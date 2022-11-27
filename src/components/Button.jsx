import React from "react";
function Button({ dispatch, type, name, cName }) {
  const c = cName ? cName : "";
  return (
    <button className={c} onClick={() => dispatch({ type: type })}>
      {name}
    </button>
  );
}

export default Button;
