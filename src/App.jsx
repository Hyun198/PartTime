import { useState, useEffect } from "react";
import moment from "moment";
import Header from './Header/header';
import Movie from './Movie/Movie';
import Link from './cgvLink/Link';
import "./App.css";


function App() {
  const [inputTime4, setInputTime4] = useState({ hour: "", minute: "" });
  const [resultTime4, setResultTime4] = useState("");

  const [inputTime2, setInputTime2] = useState({ hour: "", minute: "" });
  const [resultTime2, setResultTime2] = useState("");

  const handleTimeChange4 = (event) => {
    const { id, value } = event.target;
    setInputTime4((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleTimeChange2 = (event) => {
    const { id, value } = event.target;
    setInputTime2((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const calculateTimeWeek4End = () => {
    const { hour, minute } = inputTime4;
    if (!hour || !minute) return;
    let inputMoment = moment({ hour, minute });
    inputMoment.add(10, 'minutes');
    const result = inputMoment.subtract({ hours: 8, minutes: 0 });
    const formattedResult = result.format("HH:mm");
    setResultTime4(formattedResult);
  };

  const calculateTimeWeek4End2 = () => {
    const { hour, minute } = inputTime4;
    if (!hour || !minute) return;

    const inputMoment = moment({ hour, minute });
    const result = inputMoment.subtract({ hours: 7, minutes: 30 });
    const formattedResult = result.format("HH:mm");
    setResultTime4(formattedResult);
  };

  const calculateTimeWeek2End = () => {
    const { hour, minute } = inputTime2;
    if (!hour || !minute) return;

    let inputMoment = moment({ hour, minute });
    inputMoment.add(10, 'minutes');
    const result = inputMoment.subtract({ hours: 7, minutes: 30 });
    const formattedResult = result.format("HH:mm");
    setResultTime2(formattedResult);
  };

  const calculateTimeWeek2End2 = () => {
    const { hour, minute } = inputTime2;
    if (!hour || !minute) return;

    const inputMoment = moment({ hour, minute });
    const result = inputMoment.subtract({ hours: 7, minutes: 0 });
    const formattedResult = result.format("HH:mm");
    setResultTime2(formattedResult);
  };

  return (
    <>
      <Header />
      {/* <div className="movies-data">
        <Movie />
      </div> */}
      <div className="card">
        <Link />
        <div className="container">
          <div className="card-content">
            <h2>주4</h2>
            <input
              type="text"
              className="Timeinput"
              placeholder="time"
              id="hour"
              value={inputTime4.hour}
              onChange={handleTimeChange4}
              required
            />
            <input
              type="text"
              className="Timeinput"
              placeholder="minute"
              id="minute"
              value={inputTime4.minute}
              onChange={handleTimeChange4}
              required
            />

            <div className="card-btn-content">
              <button onClick={calculateTimeWeek4End}>마감</button>
              <button onClick={calculateTimeWeek4End2}>마감2</button>
            </div>

            <p>
              입력 시간
            </p>
            <p className="time">{inputTime4.hour}:{inputTime4.minute}</p>
            <p>
              출근 시간
            </p>
            <p className="time">{resultTime4}</p>
          </div>
          <div className="card-content">
            <h2>주2</h2>
            <input
              type="text"
              className="Timeinput"
              placeholder="time"
              id="hour"
              value={inputTime2.hour}
              onChange={handleTimeChange2}
              required
            />
            <input
              type="text"
              className="Timeinput"
              placeholder="minute"
              id="minute"
              value={inputTime2.minute}
              onChange={handleTimeChange2}
              required
            />

            <div className="card-btn-content">
              <button onClick={calculateTimeWeek2End}>마감</button>
              <button onClick={calculateTimeWeek2End2}>마감2</button>
            </div>

            <p>
              입력 시간
            </p>
            <p className="time">{inputTime2.hour}:{inputTime2.minute}</p>
            <p>
              출근 시간
            </p>
            <p className="time">{resultTime2}</p>
          </div>



        </div>




      </div>
    </>
  );
}

export default App;
