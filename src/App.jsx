import { useState } from "react";
import Counter from "./Counter";
function App(){
  const [fruit , setFruit] = useState("Apple");
  const handler =()=>{
    setFruit("Banana")
  }
  return(
    <div>
     <h1>State in React Js</h1>
     <h1>{fruit}</h1>
     <button onClick={handler}>change the fruit</button>
     <Counter/>
    </div>
  )
}

export default App;