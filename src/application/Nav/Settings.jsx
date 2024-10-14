import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa'; // Settings icon
import { FaClock, FaCheck, FaVolumeUp } from 'react-icons/fa'; // Section icons

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [autoStartBreaks, setAutoStartBreaks] = useState(false);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(true);
  const [autoCheckTasks, setAutoCheckTasks] = useState(false);
  const [alarmSound, setAlarmSound] = useState('sound1');
  const [volume, setVolume] = useState(50);
  const [repeatTimes, setRepeatTimes] = useState(1);

  const sounds = ['Sound 1', 'Sound 2', 'Sound 3', 'Sound 4'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Settings Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 text-white  rounded-lg hover:bg-customPink focus:outline-none"
      >
        <FaCog className="mr-2" />
        Settings
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-customPink rounded-lg shadow-lg p-6 z-50">
          <h2 className="text-2xl font-bold mb-4">Settings</h2>

          {/* Timer Settings */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaClock className="text-customZeeb mr-2" />
              <h3 className="text-xl font-semibold">Timer</h3>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Auto Start Breaks</span>
              <input
                type="checkbox"
                checked={autoStartBreaks}
                onChange={() => setAutoStartBreaks(!autoStartBreaks)}
                className="toggle-checkbox"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Auto Start Pomodoro</span>
              <input
                type="checkbox"
                checked={autoStartPomodoro}
                onChange={() => setAutoStartPomodoro(!autoStartPomodoro)}
                className="toggle-checkbox"
              />
            </div>
          </div>

          {/* Task Settings */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaCheck className="text-customTeal mr-2" />
              <h3 className="text-xl font-semibold">Task</h3>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Auto Check Tasks</span>
              <input
                type="checkbox"
                checked={autoCheckTasks}
                onChange={() => setAutoCheckTasks(!autoCheckTasks)}
                className="toggle-checkbox"
              />
            </div>
          </div>

          {/* Sound Settings */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <FaVolumeUp className="text-red-600 mr-2" />
              <h3 className="text-xl font-semibold">Sound</h3>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Alarm Sound</label>
              <select
                value={alarmSound}
                onChange={(e) => setAlarmSound(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                {sounds.map((sound, index) => (
                  <option key={index} value={`sound${index + 1}`}>
                    {sound}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Volume</label>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full"
              />
              <span className="text-sm">Volume: {volume}%</span>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Repeat</label>
              <select
                value={repeatTimes}
                onChange={(e) => setRepeatTimes(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'time' : 'times'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
