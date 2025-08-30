import { useState } from "react";

function App(){
  const[display , setDisplay] = useState(false)
  return(

      <>
      <h1>Toggle in React Js</h1>
      <button onClick={()=>setDisplay(!display)}>toggle</button>
      {
        display?<h1>Navneet Patel</h1>:<h2>charu patel</h2>
      }
      </>
      
  )
}
export default App;