import React from "react";
import Divider from "../Divider/Divider";
import { Link } from "react-router-dom";

const Timer = () => {
  return (
    <div id="timer" className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-200 mb-8 text-center">
          INCREASE YOUR <span className="text-customPink">PRODUCTIVITY</span>{" "}
        </h1>
        <p className="text-gray-200 font-bold mb-4">
          Procrastination stems from mostly the uncomfortability that comes with
          the wholesomeness of a task. Breaking this task into smaller chunks
          makes it seem less bogus and makes getting work done easier. The
          Pomodoro technique is a learning technique that helps to that effect.
        </p>
        <Link to="/newpage">
          <div className="text-center mt-8">
            <button className="bg-customPink text-white py-2 px-6 rounded-full text-xl font-bold hover:bg-opacity-80 transition duration-300 ease-in transform hover:scale-105">
              Enter App
            </button>
          </div>
        </Link>
      </div>
      <Divider />
    </div>
  );
};

export default Timer;
