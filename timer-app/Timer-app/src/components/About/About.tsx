import { Container } from "./About.styles";
import { IoMdNotificationsOutline } from "react-icons/io";



const About = () => {
  return (
    <Container className="container">
            <IoMdNotificationsOutline className="logoIcon"/>
          <div className="about">          
            <h3>About Alarm Clock</h3>
            <p>
              The alarm clock works like every other alarm clock you have used, just that it's online this time(Lol). It is simple(as expected), and it's totally free(well...). 
              You can direct check what time of the day it is, without need for any other application, plus you can set an alarm(isn't that lovely... that's a joke, lol).            
              if you like to play online games and you need to track time, as well as during sports activities, cooking, 
              and many other cases(copied from 123timer.com). You just need to set the time and press the "bell icon", then proceed to set an alarm.
              Lastly, don't snooze your alarm!!!!!!!!!!!!!!!
            </p>
          </div>
    </Container>
  )
}

export default About;