import  {Container}  from "./Nav.styles";
// import { ReactComponent as Logo } from "../../assets/stopwatch-svgrepo-com.*svg";
import { TfiAlarmClock } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Nav = () => {



  return (
    <Container className="container navContainer">
      <div className="logo">
        <TfiAlarmClock className="clock"/> 
        <Link to='/'>
        <h2>ALARM CLOCK</h2> 
        </Link>  
      </div>
    </Container>
  )
}

export default Nav;