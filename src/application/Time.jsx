import React, { useState, useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Divider from "../components/Divider/Divider";

const Time = () => {
  const [time, setTime] = useState(25 * 60); // Initial time for Pomodoro
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [sessionCount, setSessionCount] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [bgColor, setBgColor] = useState("bg-customPink");

  useEffect(() => {
    let timer;

    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            handleSessionEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  const handleSessionEnd = () => {
    if (activeTab === "pomodoro") {
      setSessionCount((prev) => prev + 1);
      if (sessionCount < 3) {
        setActiveTab("shortBreak");
        setTime(5 * 60);
        setBgColor("bg-customZeeb"); // Switch to Short Break color
      } else {
        setActiveTab("longBreak");
        setTime(15 * 60);
        setSessionCount(0);
        setBgColor("bg-customGray"); // Switch to Long Break color
      }
    } else {
      setActiveTab("pomodoro");
      setTime(25 * 60);
      setBgColor("bg-customPink"); // Switch back to Pomodoro color
    }
  };

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
    setBgColor("bg-customPink"); // Reset to Pomodoro color
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={`h-screen p-4 flex justify-center items-center ${bgColor}`}>
      <div className={`w-fit p-28 mx-auto border-solid text-center`}>

      <div
  className="p-10 bg-white/10 rounded-lg shadow-xl border backdrop-blur-lg"
  style={{
    backdropFilter: "blur(10px)", // Adds a nice blur effect for translucency
  }}
>
  <button
    onClick={() => handleTabClick("pomodoro", 25 * 60, "bg-customPink")}
    className={`rounded p-3 mx-2 ${
      activeTab === "pomodoro"
        ? "bg-customPink text-white shadow-lg focus:outline-none transition-transform transform hover:scale-105"
        : "bg-white text-customPink focus:outline-none transition-transform transform hover:scale-100"
    }`}
  >
    Pomodoro
  </button>
  <button
    onClick={() => handleTabClick("shortBreak", 5 * 60, "bg-customZeeb")}
    className={`rounded p-3 mx-2 ${
      activeTab === "shortBreak"
        ? "bg-customZeeb text-white shadow-lg focus:outline-none transition-transform transform hover:scale-105"
        : "bg-white text-customZeeb focus:outline-none transition-transform transform hover:scale-100"
    }`}
  >
    Short Break
  </button>
  <button
    onClick={() => handleTabClick("longBreak", 15 * 60, "bg-customGray")}
    className={`rounded p-3 mx-2 ${
      activeTab === "longBreak"
        ? "bg-customGray text-white shadow-lg focus:outline-none transition-transform transform hover:scale-105"
        : "bg-white text-customGray focus:outline-none transition-transform transform hover:scale-100"
    }`}
  >
    Long Break
  </button>

  <div
    style={{
      fontSize: "120px",
      fontWeight: "bold",
      marginTop: "20px",
      color: "#333",
    }}
  >
    {formatTime(time)}
  </div>

  <div className="flex justify-center items-center mt-4">
    <button
      onClick={isTimerRunning ? pauseTimer : startTimer}
      className="bg-customBlue text-white rounded w-32 text-3xl p-3 mr-4 focus:outline-none shadow-lg transition-transform transform hover:scale-105"
    >
      {isTimerRunning ? "Pause" : "START"}
    </button>
    <IoReload
      onClick={resetTimer}
      className="cursor-pointer text-3xl text-gray-600 hover:text-customBlue transition-transform transform hover:scale-105"
    />
  </div>
</div>



        <div className="border-solid p-4">
          <div>
            <h1>#{sessionCount} Sessions Done</h1>
            <p>Get Going</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <h2 className="text-xl">Tasks</h2>
            </div>
            <div>
              <TfiMenuAlt />
            </div>
          </div>

          <Divider className="bg-slate-100 w-full" />
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
  );
};

export default Time;
