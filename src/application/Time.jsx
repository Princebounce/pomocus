import React, { useState, useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Divider from "../components/Divider/Divider"

const Time = () => {
  const [time, setTime] = useState(25 * 60); // Initial time for Pomodoro
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [sessionCount, setSessionCount] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [bgColor, setBgColor] = useState("bg-customPink");

  useEffect(() => {
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            if (sessionCount < 4) {
              setSessionCount(sessionCount + 1);
              setActiveTab("shortBreak");
              setTime(5 * 60);
              startTimer();
            } else {
              setActiveTab("longBreak");
              setTime(15 * 60);
              setSessionCount(0);
              startTimer();
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    };

    if (isTimerRunning) {
      startTimer();
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [time, activeTab, sessionCount, isTimerRunning]);

  const handleTabClick = (tab, duration, color) => {
    setActiveTab(tab);
    setTime(duration);
    setIsTimerRunning(false);
    setBgColor(color);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTime(25 * 60);
    setSessionCount(0);
    setActiveTab("pomodoro");
    setBgColor("bg-customPink");
  };

  return (
    <div className="bg-customTeal">
      <div className=" h-screen  p-4 justify-center items-center">
        <div
          className={`justify-between w-fit p-28 mx-auto border-solid ${bgColor} items-center text-center`}
        >
          <div className="p-10">
            <button
              onClick={() => handleTabClick("pomodoro", 25 * 60, "bg-red-300")}
              className={`rounded p-3 ${
                activeTab === "pomodoro"
                  ? "bg-red-300 shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105"
                  : "focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-100"
              }`}
            >
              Pomodoro
            </button>
            <button
              onClick={() =>
                handleTabClick("shortBreak", 5 * 60, "bg-green-300")
              }
              className={`rounded p-3 ${
                activeTab === "shortBreak"
                  ? "bg-green-300 shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105"
                  : "focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-100"
              }`}
            >
              Short Break
            </button>
            <button
              onClick={() =>
                handleTabClick("longBreak", 15 * 60, "bg-blue-300")
              }
              className={`rounded p-3 ${
                activeTab === "longBreak"
                  ? "bg-blue-300 shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105"
                  : "focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-100"
              }`}
            >
              Long Break
            </button>
          </div>
          <div
            style={{
              fontSize: "120px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {`${Math.floor(time / 60)}:${time % 60 < 10 ? "0" : ""}${
              time % 60
            }`}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={isTimerRunning ? pauseTimer : startTimer}
              className={`bg-white rounded w-32 text-xl p-3 mr-4 focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105`}
            >
              {isTimerRunning ? "Pause" : "Start"}
            </button>
            <IoReload
              onClick={resetTimer}
              className="cursor-pointer focus:outline-none focus:ring focus:border-blue-300 transition-transform transform hover:scale-105"
            />
          </div>
          <div className="border-solid justify-between items-center p-4">
       <div>
         <h1>#{sessionCount} Sessions Done</h1>
         <p>Get Going</p>
       </div>
       <div className="flex justify-between items-center mt-4">
  <div className="flex items-center">
    <h2 className=" text-xl">Tasks</h2>
  </div>
  <div>
    {/* Hamburger menu */}
    <TfiMenuAlt />
  </div>
 
</div>
<Divider className="bg-customTeal w-full"/>

<div className="flex items-center justify-center">
  <div className="border-dotted border-2 w-full flex justify-center p-2">
    <button>
      <IoIosAddCircleOutline />
    </button>
    <span className="ml-2">Add a Task</span>
  </div>
</div>

     
     </div>
        </div>
      
      
       
     </div>

      
    </div>
  );
};

export default Time;
