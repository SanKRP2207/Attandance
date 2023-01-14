import React, { useState, useEffect } from 'react';
import './App.css';

const Attendance = () => {
  const [attendance, setAttendance] = useState({});
  const [today, setToday] = useState(new Date());
  const [rollNumber, setRollNumber] = useState('');
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAttendance = rollNumber => {
    setAttendance({ ...attendance, [rollNumber]: today });
  };

  const handleCheckAttendance = rollNumber => {
    setIsPresent(attendance[rollNumber] != null);
  };

  return (
    <>
      <div className='main'>
        <div className='sub1'>
          <h1>Student Attendance</h1>
          <form>
            <label>
              Roll Number:
              <input
                type="number"
                name="rollNumber"
                id="rollNumber"
                value={rollNumber}
                onChange={e => setRollNumber(e.target.value) }
              />
            </label>
            <button type="button" onClick={() => handleAttendance(rollNumber)}>
              Mark Attendance
            </button>
          </form>
        </div>

        <div className='sub2'>
          <h2>Today's Attendance</h2>
          <div>
            <ul>
              {Object.entries(attendance).map(([rollNumber, timestamp]) => (
                <li key={rollNumber} >
                  Roll No. {rollNumber}: {timestamp.toString()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='sub3'>
          <h2>Attendance Status</h2>
          <form>
            <label>
              Roll Number:
              <input
                type="number"
                name="rollNumber"
                id="rollNumber"
                value={rollNumber}
                onChange={e => setRollNumber(e.target.value)}
              />
            </label>
            <button type="button" onClick={() => handleCheckAttendance(rollNumber)}>
              Check Attendance
            </button>
          </form>
          <p id='p1'>Roll Number: {rollNumber}</p>
          <p id='p2'>Present: {isPresent ? 'Yes' : 'No'}</p>
        </div>





        {/* <form>
        <label>
          Roll Number:
          <input 
            type="text" 
            name="rollNumber" 
            id="rollNumber"
            value={rollNumber}
            onChange={e => setRollNumber(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => handleCheckAttendance(rollNumber)}>
          Check Attendance
        </button>
      </form> */}

        {/* <h2>Attendance Status</h2> */}
        {/* <p>Roll Number: {rollNumber}</p> */}
        {/* <p>Present: {isPresent ? 'Yes' : 'No'}</p> */}

        {/* <h2>Today's Attendance</h2> */}
        {/* <ul>
        {Object.entries(attendance).map(([rollNumber, timestamp]) => (
          <li key={rollNumber}>
            {rollNumber}: {timestamp.toString()}
          </li>
        ))}
      </ul> */}
      </div>
    </>
  );
};

export default Attendance;
