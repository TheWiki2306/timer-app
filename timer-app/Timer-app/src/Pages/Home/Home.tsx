import { Link } from 'react-router-dom';
import { Container } from './Home.styles'
import { IoMdNotificationsOutline } from "react-icons/io";
import Nav from '../../components/Nav/Nav';
import About from '../../components/About/About';



const Home = () => {
  return (
    <Container>
        <Nav/>
        <div className="body">
            <h2>Online Alarm Clock</h2>
            <p>Use a simple and convenient alarm clock online and for free</p>
            <div className="nav">      
              <Link to='/alarm' className="navLink">Want to set an Alarm?</Link>
              <Link to='/alarm'><IoMdNotificationsOutline className="icon"/></Link>
            </div>
        </div>
        
        <About/>

    </Container>
  )
}

export default Home