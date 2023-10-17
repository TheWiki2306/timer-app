import  {Container}  from "./Nav.styles";
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "../../assets/stopwatch-svgrepo-com.*svg";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaStopwatchSolid } from "react-icons/lia";
import { BiTimer } from "react-icons/bi";


const Nav = () => {

  return (
    <Container className="container navContainer">
      <div className="logo">
        <TfiAlarmClock className="clock"/> 
        <h2>ALARM CLOCK</h2>   
      </div>
        <div className="nav">      
          <Link to='/alarm' className="navLink"><IoMdNotificationsOutline className="icon"/>Alarm</Link>
          <Link to='/stopwatch' className="navLink"><LiaStopwatchSolid className="icon"/>Stopwatch</Link>
          <Link to='/timer' className="navLink"><BiTimer className="icon"/>Timer</Link>
       </div>
          <div>
            <h4>Language change</h4>
          </div>
    </Container>
  )
}

export default Nav;