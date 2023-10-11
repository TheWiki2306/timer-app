import  {Container}  from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Container>
       <Link to='/alarm'>Alarm</Link>
       <Link to='/stopwatch'>Stopwatch</Link>
       <Link to='/timer'>Timer</Link>
    </Container>
  )
}

export default Nav;