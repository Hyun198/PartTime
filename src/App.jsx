import { useState, useEffect } from "react";
import moment from "moment";
import Header from './Header/header';
import Movie from './Movie/Movie';
import Link from './cgvLink/Link';
import "./App.css";


function App() {
  const [inputTime, setInputTime] = useState({ hour: "", minute: "" });
  const [resultTime, setResultTime] = useState("");

  const handleTimeChange = (event) => {
    const { id, value } = event.target;
    setInputTime((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const calculateTime = () => {
    const { hour, minute } = inputTime;
    if (!hour || !minute) return;

    const inputMoment = moment({ hour, minute });
    const result = inputMoment.subtract({ hours: 8, minutes: 0 });
    const formattedResult = result.format("HH:mm");
    setResultTime(formattedResult);
  };

  const calculateTime2 = () => {
    const { hour, minute } = inputTime;
    if (!hour || !minute) return;

    const inputMoment = moment({ hour, minute });
    const result = inputMoment.subtract({ hours: 7, minutes: 30 });
    const formattedResult = result.format("HH:mm");
    setResultTime(formattedResult);
  };

  return (
    <>
      <Header />
      {/* <div className="movies-data">
        <Movie />
      </div> */}
      <div className="card">
        <Link />

        <div className="card-content">
          <h3 className="content-header">시간 계산기</h3>
          <input
            type="text"
            className="Timeinput"
            placeholder="time"
            id="hour"
            value={inputTime.hour}
            onChange={handleTimeChange}
            required
          />
          <input
            type="text"
            className="Timeinput"
            placeholder="minute"
            id="minute"
            value={inputTime.minute}
            onChange={handleTimeChange}
            required
          />

          <div className="card-btn-content">
            <button onClick={calculateTime}>마감</button>
            <button onClick={calculateTime2}>마감2</button>
          </div>

          <p>
            입력 시간
          </p>
          <p className="time">{inputTime.hour}:{inputTime.minute}</p>
          <p>
            출근 시간
          </p>
          <p className="time">{resultTime}</p>
        </div>
      </div>
    </>
  );
}

export default App;
