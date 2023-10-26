// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { useState } from 'react';
// import { AlarmProps } from '../../components/Alarm/Alarm';
import Alarm from '../../components/Alarm/Alarm';
import { Container } from "./AlarmClock.styles";

import alarm1 from '../../assets/K44XEWK-alarm-fire-alarm-buzzer-01.mp3'
 interface AlarmProps {
  time: string;
  sound: string;
 }

const AlarmClock = () => {

  const [alarms, setAlarms] = useState([] as AlarmProps[]);
  const [newAlarmTime, setNewAlarmTime] = useState('');
  const [selectedSound, setSelectedSound] = useState('');
  
  const handleNewAlarmTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAlarmTime(e.target.value);
  };
  
  const handleSoundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSound(e.target.value);
  };
  
  // const addAlarm = (): => {
  //   setAlarms([...alarms, { time: newAlarmTime, sound: selectedSound }]);
  //   setNewAlarmTime('');
  // };

  
  const addAlarm = (): void => {
    const newAlarm: AlarmProps = { time: newAlarmTime, sound: selectedSound };
    setAlarms([...alarms, newAlarm]);
    setNewAlarmTime('');
    alert('alarm added');
  };

  const handleSnooze = (index: number) => {
    // Implement snooze logic here
    console.log(`Snoozing alarm at index ${index}`);
  };
  
  const handleDismiss = (index: number) => {
    // Implement dismiss logic here
    const updatedAlarms = [...alarms];
    updatedAlarms.splice(index, 1);
    setAlarms(updatedAlarms);
  };

  return (
    <Container>
     <h1>Welcome to alarm</h1>
     <div>
        <label>Set Alarm Time: </label>
        <input type="time" value={newAlarmTime} onChange={handleNewAlarmTimeChange} />
        <label>Select Sound: </label>
        <select value={selectedSound} onChange={handleSoundChange}>
          <option value={alarm1}>Alarm 1</option>
          <option value="alarm2.mp3">Alarm 2</option>
        </select>
        <button onClick={addAlarm}>Set Alarm</button>
      </div>
      <div>
        {alarms.map((alarm, index) => (
          <Alarm
            key={index}
            time={alarm.time}
            sound={alarm.sound}
            onSnooze={() => handleSnooze(index)}
            onDismiss={() => handleDismiss(index)}
          />
        ))}
      </div>
    </Container>
  )
}

export default AlarmClock;