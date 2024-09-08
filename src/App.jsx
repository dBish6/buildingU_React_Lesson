import { useState, useRef, useEffect, useContext, useReducer } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

import Example from "./Example";
import ReducerExample from "./ReducerExample";
import MemoExample from "./MemoExample";

import "./App.css";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [show, setShow] = useState(false),
    btnRef = useRef(null);

  // const fun = (parm) => {

  // }
  
  const hi = false;

  return (
    <div className={`${theme}-card`}>
      {/* <button ref={btnRef} onClick={toggleTheme}>{theme}</button> */}
      {/* {show && <Example show={show} />} */}

      <MemoExample />
    </div>
  );
}

export default App;
