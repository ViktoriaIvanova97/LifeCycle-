import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifecycleComponent from "./LifecycleComponent";


function App() {
  const[state,setState]=useState(0)
  return (
    <>
      {state < 10 ? <LifecycleComponent /> : <p>...</p>}
      <p>{ state}</p>
      <button onClick={()=>setState(state=>state+1)}>componentWillUnmount</button>
    </>
  );
}

export default App;
