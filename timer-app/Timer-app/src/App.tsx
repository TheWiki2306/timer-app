import Nav from "./components/Nav/Nav"
import GlobalStyles from "./components/Global styles/Global"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path='/alarm' element={<Nav/>}/>
       
      </Routes>
    </>
  )
}

export default App
