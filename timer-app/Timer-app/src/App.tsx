import Nav from "./components/Nav/Nav"
import GlobalStyles from "./components/Global styles/Global"
import { Routes, Route } from "react-router-dom"
import Alarm from "./Pages/Alarm/Alarm";
import Timer from "./Pages/Timer/Timer";


function App() {

  return (
    <>
    <GlobalStyles/>
    <Nav/>
    <Routes>
      <Route path='/alarm' element={<Alarm/>}/>
      <Route path='/timer' element={<Timer/>}/>
    </Routes>
    </>
  )
}

export default App
