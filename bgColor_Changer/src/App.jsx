import { useState } from "react"

const App = () => {

  const [color, setColor] = useState("green")
    return (
      <div
        className="w-full h-screen duration-200 flex flex-wrap justify-center items-end"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-4 justify-center">
          <div className="px-3 py-2 bg-white w-24 rounded-full flex justify-center items-center">
            <button
              className="px-4 py-3 font-bold rounded-full"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>
          </div>
          <div className="px-3 py-2 bg-white w-24 rounded-full flex justify-center items-center">
            <button
              className="px-4 py-3 font-bold rounded-full"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
          </div>
          <div className="px-3 py-2 bg-white w-24 rounded-full flex justify-center items-center">
            <button
              className="px-4 py-3 font-bold rounded-full"
              style={{ backgroundColor: "violet" }}
              onClick={() => {
                setColor("violet");
              }}
            >
              Violet
            </button>
          </div>
          <div className="px-3 py-2 bg-white w-24 rounded-full flex justify-center items-center">
            <button
              className="px-4 py-3 font-bold rounded-full"
              style={{ backgroundColor: "orange" }}
              onClick={() => {
                setColor("orange");
              }}
            >
              Orange
            </button>
          </div>
          <div className="px-3 py-2 bg-white w-24 rounded-full flex justify-center items-center">
            <button
              className="px-4 py-3 font-bold rounded-full"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setColor("yellow");
              }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    );
}

export default App