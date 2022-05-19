import { useState } from "react";
import "./styles.css";

export default function App() {
  const[count, setCount] = useState(0)
  return (

    <div className="App">
     <h1> Count : {count}</h1>
     <div>
        <button onClick={() => setCount(count + 1)}>Increament</button>
     </div>
    </div>
  );
}
