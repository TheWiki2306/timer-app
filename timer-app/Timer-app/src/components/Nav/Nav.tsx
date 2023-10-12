import  {Container}  from "./Nav.styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "react";


const Nav = () => {

  return (
    <Container>
        <Logo/>
      <div>
       <Link to='/alarm'>Alarm</Link>
       <Link to='/stopwatch'>Stopwatch</Link>
       <Link to='/timer'>Timer</Link>
       </div>
    </Container>
  )
}

export default Nav;