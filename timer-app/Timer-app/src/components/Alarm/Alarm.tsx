import { useState, useEffect } from "react"; 
import { Container } from "./Alarm.styles";


export interface AlarmProps  {
    time: string;
    sound: string;
    onSnooze: () => void;
    onDismiss: () => void;
  }

const Alarm: React.FC<AlarmProps> = ({ time, sound, onSnooze, onDismiss }) => {
    const [currentTime, setCurrentTime] = useState(''); 
   
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();

      setCurrentTime(now.toLocaleTimeString());
      if (now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit'}) === time) {
        alert('alarm obeyed')
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [time, sound]);

    return (
    <Container>
         <div>
      <h3>Alarm Time: {time}</h3>
      <p>Current Time: {currentTime}</p>
      <button onClick={onSnooze}>Snooze</button>
      <button onClick={onDismiss}>Dismiss</button>
    </div>

    </Container>
  )
}

export default Alarm;