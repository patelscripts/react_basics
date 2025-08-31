import Colleges from "./Colleges";
import User from "./User";
function App(){
  // let Username = "Navneet Patel";
  // let age = 20;
  // let email = "navneetpatel325@gmail.com";
  let Userobj = {
    name:"navneet patel",
    age : 20,
    email:"navneetpatel325@gmail.com"
  }
    let Userobj2 = {
    name:"Charu patel",
    age : 21,
    email:"charupatel325@gmail.com"
  }
  let colleges = ["IET" ,"IIT","DTU","NIT"];
  return(
    <div>
      <h1>Props in react</h1>
      <Colleges collName={colleges[0]}/>
      <User user={Userobj}/>
      <User user={Userobj2}/>
    </div>
  )
}
export default App;
