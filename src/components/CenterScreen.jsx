'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import HtmlImg from "@/images/html5.jpg";
import TargetImg from "@/images/target.jpg";
import Check from "@/images/check.png";
import { faChartLine, faSquareCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Title, Tooltip as TooltipJS } from 'chart.js';

ChartJS.register(ArcElement, Title, TooltipJS);

const data = [
  { percentile: 0, students: 2 },
  { percentile: 10, students: 3 },
  { percentile: 20, students: 5 },
  { percentile: 25, students: 4 },
  { percentile: 30, students: 6 },
  { percentile: 40, students: 7 },
  { percentile: 50, students: 8 },
  { percentile: 60, students: 7 },
  { percentile: 70, students: 9 },
  { percentile: 75, students: 10 },
  { percentile: 80, students: 11 },
  { percentile: 90, students: 13 },
  { percentile: 100, students: 15 },
];

const CenterScreen = () => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newCorrectAnswers, setNewCorrectAnswers] = useState(correctAnswers);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const saveUpdates = () => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCorrectAnswers(newCorrectAnswers);
    closeModal();
  };

  const donutData = {
    labels: ['Correct Answers', 'Remaining'],
    datasets: [
      {
        data: [correctAnswers, 15 - correctAnswers],
        backgroundColor: ['#2563eb', '#bed6ff'],
      },
    ],
  };

  return (
    <div className="w-full h-full p-4 pl-8 flex flex-col">
      <h2 className="text-lg mb-4">Skill Test</h2>

      <div className="flex flex-col lg:flex-row gap-8 h-full">
        <div className="flex-1 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center">
              <Image
                src={HtmlImg}
                alt="HTML"
                height={50}
                width={50}
                className="rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-xl font-medium">Hyper Text Markup Language</h3>
                <p className="text-sm text-black font-normal">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
              <button onClick={openModal} className="bg-blue-900 text-white ml-10 px-4 py-2 rounded-lg hover:bg-indigo-500">
                Update
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-lg font-semibold">Quick Statistics</h4>
            <div className="flex flex-row justify-between mt-2">
              <div className="flex items-center pr-4">
                <div className="bg-gray-100 p-3 rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD43B" }} />
                </div>
                <div className="ml-4">
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold">{rank}</span>
                    <p className="text-xs text-gray-500">YOUR RANK</p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 mx-4"></div>

              <div className="flex items-center pr-4">
                <div className="bg-gray-100 p-3 rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center">
                  <Image
                    src={Check}
                    alt="Trophy"
                    height={20}
                    width={20}
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold">{percentile}%</span>
                    <p className="text-xs text-gray-500">PERCENTILE</p>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-gray-300 mx-4"></div>

              <div className="flex items-center">
                <div className="bg-gray-100 p-3 rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{ color: "#18f23c", scale: 1.3 }}
                  />
                </div>
                <div className="ml-4">
                  <div className="flex flex-col items-start">
                    <span className="text-xl font-bold">{correctAnswers}/15</span>
                    <p className="text-xs text-gray-500">CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold">Comparison Graph</h4>
                <p className="mt-4 text-sm text-gray-500 w-3/4">
                  <span className='font-bold'> You scored {percentile}% percentile</span> which is lower than the average percentile 72% of all the engineers who took this assignment.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-full border-2 border-gray-200 shadow-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faChartLine} style={{color: "#ff0000",}} 
                    className="rounded-full object-contain"
                  />
                </div>
            </div>

            <div className="mt-4 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="percentile" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="students" stroke="#8884d8" />
                  <ReferenceLine
                    x={percentile}
                    stroke="grey"
                    strokeWidth={1}
                    label={{
                      value: "Your percentile",
                      position: "insideTopRight",
                    }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        <div className="w-5/12 mr-0 h-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h4>
            <div className="mb-4">
              <p className="mb-2">HTML Tools, Forms, History</p>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-gray-200 h-2 rounded-md">
                  <div className="bg-blue-600 h-2 w-[80%] rounded-md"></div>
                </div>
                <p className="text-blue-600 font-bold">80%</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2">Tags & References in HTML</p>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-gray-200 h-2 rounded-md">
                  <div className="bg-orange-500 h-2 w-[60%] rounded-md"></div>
                </div>
                <p className="text-orange-500 font-bold">60%</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2">Tables & References in HTML</p>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-gray-200 h-2 rounded-md">
                  <div className="bg-red-500 h-2 w-[24%] rounded-md"></div>
                </div>
                <p className="text-red-500 font-bold">24%</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-2">Tables & CSS Basics</p>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-gray-200 h-2 rounded-md">
                  <div className="bg-green-500 h-2 w-[96%] rounded-md"></div>
                </div>
                <p className="text-green-500 font-bold">96%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h4 className="text-lg font-bold mb-4 flex justify-between items-center">
              <span>Question Analysis</span>
              <p className="text-sm text-[#8884d8]">{correctAnswers}/15</p>
            </h4>

            <div className="mb-4">
              <p className="text-sm mb-4 text-gray-600">
                <span className='font-bold'>You scored {correctAnswers} question correct out of 15.</span> However, it still needs improvements.
              </p>

              <div className="flex justify-center items-center mt-4 w-full">
                <div className="relative w-48 h-48">
                  <Doughnut data={donutData} />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image src={TargetImg} alt="HTML" height={50} width={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {modalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-2/5 p-6">
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-xl font-semibold">Update Scores</h3>
        <Image
          src={HtmlImg}
          alt="HTML"
          height={50}
          width={50}
          className="rounded-md"
        />
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">1</span>
          <label className="block mb-1 ml-2">Update your <span className='font-bold'>Rank</span></label>
        </div>
        <div className="w-1/4">
          <input
            type="number"
            value={newRank}
            onChange={(e) => {
              const value = e.target.value;
              if (value !== "0") { 
                setNewRank(value);
              }
            }}
            min="1"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {newRank === "" && <p className="text-red-500 text-sm mt-1">Rank is required.</p>}
          {newRank === "0" && <p className="text-red-500 text-sm mt-1">Rank cannot be 0.</p>}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">2</span>
          <label className="block mb-1 ml-2">Update your <span className='font-bold'>Percentile</span></label>
        </div>
        <div className="w-1/4">
          <input
            type="number"
            value={newPercentile}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setNewPercentile("");
              } else {
                setNewPercentile(Number(value));
              }
            }}
            min="0"
            max="100"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {newPercentile === "" && <p className="text-red-500 text-sm mt-1">Required | should be number.</p>}
          {(newPercentile < 0 || newPercentile > 100) && newPercentile !== "" && <p className="text-red-500 text-sm mt-1">Percentile should be between 0 and 100.</p>}
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold">3</span>
          <label className="block mb-1 ml-2">Update your <span className='font-bold'>Correct Answers</span></label>
        </div>
        <div className="w-1/4">
          <input
            type="number"
            value={newCorrectAnswers}
            onChange={(e) => setNewCorrectAnswers(e.target.value)}
            min="0"
            max="15"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {newCorrectAnswers === "" && <p className="text-red-500 text-sm mt-1">Correct Answers are required.</p>}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={closeModal} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
        <button
          onClick={saveUpdates}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save &#8594;
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CenterScreen;
