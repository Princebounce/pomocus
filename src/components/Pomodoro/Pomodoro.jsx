import React from "react";
import  Consistency from '../../assets/images/consistency.png'
import  Productivity from '../../assets/images/productivity.jpg'
import Steadily  from '../../assets/images/steadily.jpg'
import Divider from "../Divider/Divider";

const Pomodoro = () => {
  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-customPink mt-6 mb-12 text-center">
          POMOCUS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src={Consistency}
              alt="Consistency"
              className="mx-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-customPink mb-4">Consistency</h2>
            <p className="text-gray-300">
              The Pomodoro technique focuses more on consistency than speed. Each session is an opportunity to improve on the previous one, thus it gradually gets better. Mr. Cirillo believes that “concentration and consciousness lead to speed, one pomodoro at a time."
            </p>
          </div>

          <div className="text-center">
            <img
              src={Steadily}
              alt="Steadily"
              className="mx-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-customPink mb-4">Steadily</h2>
            <p className="text-gray-300">
              Work with a 25-minute and 5-minute cycle break with the Pomodoro technique. Take an even longer break after the completion of a cycle (4 Pomodoros). Increase your work time as you progress or build concentration.
            </p>
          </div>

          <div className="text-center">
            <img
              src={Productivity}
              alt="Productivity"
              className="mx-auto mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold text-customPink mb-4">Productivity</h2>
            <p className="text-gray-300">
              Watch your productivity level shoot up with this technique. Your focus will come together, and you'll be able to work without distractions for an extended period of time.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-customPink mb-4">"Start Your Task and Timer</p>
          <p className="text-2xl font-bold text-customPink mb-4">Take a Break</p>
          <p className="text-2xl font-bold text-customPink mb-4">
    Rinse and Repeat. Task Done"<span className="inline-block "><ion-icon name="checkbox-outline"></ion-icon></span>
  </p>
          
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Pomodoro;