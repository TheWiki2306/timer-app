import GlobalStyles from "./components/Global styles/Global"
import { Routes, Route  } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Container } from "./App.styles";
import AlarmClock from "./Pages/Alarm clock/AlarmClock";
import Home from "./Pages/Home/Home";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Tilt Neon',
      'sans-serif',
    ].join(','),
  },});

function App() {

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Typography>
          <GlobalStyles/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/alarm' element={<AlarmClock/>}/>
          </Routes>  
        </Typography>
      </ThemeProvider>
    </Container>
  )
}

export default App
