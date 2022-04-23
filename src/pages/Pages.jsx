import Home from "./Home";
import Cusine from "./Cusine";
import { Route, Routes, } from "react-router-dom";

function Pages() {
  return (
    
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/cuisine/:type" element={<Cusine />}/>
   </Routes>

  )
}

export default Pages