// src/App.js
import React, { useEffect, useState } from "react";

export default function App() {
  const CREW_ID = "1";

  const [mugiwara, setMugiwara] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(function () {
  //   fetch(`https://api.api-onepiece.com/v2/characters/en/crew/${CREW_ID}`)
  //     .then((res) => res.json())
  //     .then((data) => setMugiwara(data));
  // }, []);

  useEffect(function () {
    async function fetchMugiwara() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://api.api-onepiece.com/v2/characters/en/crew/${CREW_ID}`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching the Mugiwaras");

        const data = await res.json();
        setMugiwara(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMugiwara();
  }, []);

  return (
    <main>
      <Hero />
      <MugiwaraSection>
        <Grid>
          {isLoading && <Loader />}
          {!isLoading &&
            !error &&
            mugiwara.map((nakima) => (
              <Nakima nakima={nakima} key={nakima.id} />
            ))}
          {error && <ErrorMessage message={error} />}
          {}
        </Grid>
      </MugiwaraSection>
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/hero.jpg"
        alt="One Piece"
        className="w-full h-[400px] md:h-[600px] object-cover"
      />
    </section>
  );
}

function MugiwaraSection({ children }) {
  return (
    <section className="px-[10px] py-[60px]">
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
      {children}
    </div>
  );
}

function Nakima({ nakima }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white"
          src={`/one-piece-binder/images/mugiwara-${nakima.id}.png`}
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

function Loader() {
  return <p className="loader">Mugiwaras are coming</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}
