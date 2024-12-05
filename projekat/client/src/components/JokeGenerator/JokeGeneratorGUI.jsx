import React from "react";
import useJoke from "../../hooks/useJoke"; // Import the custom hook
import "./JokeGenerator.css";

const JokeGenerator = () => {
  const { joke, fetchJoke } = useJoke();

  return (
    <section className="joke-generator">
      <header className="joke-generator-header">
        <h1 className="header">Joke Generator</h1>
      </header>

      <main className="joke-generator-content">
        <div className="text-box">
          <p>
            A joke a day keeps the pain away! 
            Are you feeling sad? Has something bad happened to you recently? Generate a joke and lighten up your mood!
          </p>
          <iframe style={{border:'none', height:'300px', width:'300px'}} src="https://lottie.host/embed/201186c0-c48d-495d-bbad-303a0bd118b1/IGloWlFRga.json"></iframe>
        </div>
        <div className="joke-container">
          <button className="generate-joke-btn" onClick={fetchJoke}>Generate Joke</button>
          {joke && <p className="joke-text">{joke}</p>}
        </div>
      </main>
    </section>
  );
};

export default JokeGenerator;
