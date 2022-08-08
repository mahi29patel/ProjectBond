
// import React from "react";
// import Login from "./components/Login";

// const App = () => {
//   return <Login/>;
// };
import './App.css';
import React from "react";
import { Pets } from "./components/pets/Pets";
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import {Login} from "./components/Login/Login"

const App = () => {
  return (
 
  <Router>
    <Routes>
        <Route exact path='/'>
          <Pets/>
        </Route>
        <Route path='/login'><Login /></Route>
        </Routes>
        </Router>
  );
};

export default App;


// import React from 'react';
// import { Pets } from "./components/pets/Pets";


// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



// function App() {
//   return (
//     <div>
//         {/* <Router>
             
//                 <div className="container">
//                     <Routes> 
//                           <Route path = "/" exact component = {Pets}></Route>
//                           <Route path = "/login" component = {Login}></Route>
//                     </Routes>
//                 </div>
             
//         </Router> */}
//         <Pets/>

//         {/* <ReactFinalFormDemo/> */}
//     </div>
    
//   );
// }

// export default App;