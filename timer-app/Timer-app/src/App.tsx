import Nav from "./components/Nav/Nav"
import GlobalStyles from "./components/Global styles/Global"
import { Routes, Route } from "react-router-dom"
import Alarm from "./Pages/Alarm/Alarm";
import Timer from "./Pages/Timer/Timer";
import StopWatch from "./Pages/stopwatch/StopWatch";


function App() {

  return (
    <>
    <GlobalStyles/>
    <Nav/>
    <Routes>
      <Route path='/alarm' element={<Alarm/>}/>
      <Route path='/timer' element={<Timer/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
    </Routes>
    </>
  )
}

export default App
