import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Formulario from "./Pages/formulario"


function App() {
  

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/encomendar/:id" element={<Formulario/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
