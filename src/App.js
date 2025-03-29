// src/App.js
import React, { useEffect, useState } from "react";

export default function App() {
  const CREW_ID = "1";

  const [mugiwara, setMugiwara] = useState([]);

  useEffect(function () {
    fetch(`https://api.api-onepiece.com/v2/characters/en/crew/${CREW_ID}`)
      .then((res) => res.json())
      .then((data) => setMugiwara(data));
  }, []);

  return (
    <main>
      <section className="">
        <img
          src="/images/hero.jpg"
          alt="One Piece"
          className="w-full h-[600px] object-cover"
        />
      </section>

      <section className="py-[60px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-x-5 gap-y-5">
            {mugiwara.map((nakima) => (
              <Nakima nakima={nakima} key={nakima.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Nakima({ nakima }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white"
          src={`/images/mugiwara-${nakima.id}.png`}
          alt={nakima.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {nakima.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {nakima.job}
        </span>
      </div>
    </div>
  );
}
