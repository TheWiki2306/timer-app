import Nav from "./components/Nav/Nav"
import GlobalStyles from "./components/Global styles/Global"
import { Routes, Route } from "react-router-dom"
import Alarm from "./Pages/Alarm/Alarm";
import Timer from "./Pages/Timer/Timer";
import StopWatch from "./Pages/stopwatch/StopWatch";
import SectionOne from "./components/sectionOne/SectionOne";
import { createTheme, ThemeProvider } from '@mui/material';
import Typography from "@mui/material/Typography";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Tilt Neon',
      'sans-serif',
    ].join(','),
  },});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Typography>
    <GlobalStyles/>
    <Nav/>
    <Routes>
      <Route path='/alarm' element={<Alarm/>}/>
      <Route path='/timer' element={<Timer/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
    </Routes>
    <SectionOne/>
    </Typography>
    </ThemeProvider>
  )
}

export default App
