import React from "react";
import Pomo from "../../assets/images/pomo.png";
import Divider from "../Divider/Divider";
const About = () => {
  return (
    <div id="about" className=" py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center font-bold text-gray-100  mb-8">
          About <span className="text-customPink"> Pomocus</span>
        </h1>
        <div className="md:flex md:flex-row-reverse md:justify-between grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <img
              src={Pomo}
              alt="Tomato Timer"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-customPink mb-4">
              Welcome to Pomocus - Your Task and Study Efficiency Companion!
            </p>
            <p className="text-gray-200 text-lg font-semibold mb-4">
              Pomocus is a web application designed to help you boost your
              productivity by implementing the Pomodoro Technique. We understand
              the importance of efficient time management when it comes to tasks
              and study sessions, and Pomocus is here to assist you in that
              journey.
            </p>
            <p className="text-gray-200 text-lg font-semibold">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo. It's a simple, yet effective way to enhance
              your focus, productivity, and efficiency by breaking your work
              into intervals (usually 25 minutes) separated by short breaks.
            </p>
            <p className="text-gray-200 text-lg font-semibold mt-4">
              With Pomocus, you can easily start, pause, and resume your
              Pomodoro sessions. The timer will keep you on track, and the short
              breaks will help you recharge. You can also customize your session
              durations to fit your workflow.
            </p>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default About;
