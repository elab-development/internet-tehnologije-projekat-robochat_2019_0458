// src/hooks/useJoke.js
import { useState, useCallback } from 'react';

const useJoke = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = useCallback(async () => {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=en");
      const data = await response.json();
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} - ${data.delivery}`);
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Oops! Something went wrong.");
    }
  }, []);

  return { joke, fetchJoke };
};

export default useJoke;
