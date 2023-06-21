import { useState } from "react";
import { useEffect } from "react";

function App() {
  const URL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("the only who can bet my its me");
  const getDevices = () => {
    fetch(URL)
      .then((request) => request.json())
      .then((response) => setAdvice(response));
  };

  const handleclick = () => {
    getDevices();
  };

  useEffect(() => {
    getDevices();
  }, []);
  return (
    <main className="bg-gray-900 h-screen">
      <h1 className="text-xl text-center text-white p-2 uppercase">
        Your Favorite Advice Generator
      </h1>
      <div className="flex place-content-center pt-6">
        <div className="max-w-sm min-w-[325px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="text-center text-green-500 uppercase">
            advice #{advice?.slip?.id || "1"}
          </p>
          <h2 className="text-white font-bold">{advice?.slip?.advice}</h2>
          <button
            onClick={handleclick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-thin my-4 py-1 px-2 border border-blue-700 rounded"
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <h5 className="text-white uppercase text-m text-center p-6">
          Made by <a className=" hover:underline" href="https://github.com/Ferrer97" target="_blank">Julio Ferrer</a>
        </h5>
      </div>
    </main>
  );
}

export default App;
