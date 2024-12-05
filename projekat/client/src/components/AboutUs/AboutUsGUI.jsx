import React from "react";

import "./AboutUsGUI.css"; 

const AboutUsGUI = () => {


  return (
    <section className="about-us">
      <header className="about-us-header">
        {/* Naslov sekcije 'About Us' */}
        <h1 className="header">About Us</h1>
      </header>

      <main className="about-us-content">
        <div className="model-container">
          <div className="sketchfab-embed-wrapper">
            {/* Iframe za ugrađeni 3D model sa Sketchfab-a */}
            <iframe src="https://lottie.host/embed/6171f926-a9ec-4882-9b20-8a47d6076bc5/VgLhWtBU5R.json"></iframe>
          </div>
        </div>
        <div className="text-and-quote">
          <p>
            {/* Dobrodošlica korisnicima */}
            <span className="subheading">Welcome to Bot AI</span><br />
            
            Bot AI is a free AI-powered therapist designed to provide
             accessible mental health support for individuals seeking help.
              By utilizing advanced machine learning and natural language processing,
               Bot AI engages in empathetic conversations, offering a safe and confidential
                space for users to discuss their feelings, stress, and anxieties. 
                It provides personalized responses, guiding users through mindfulness exercises,
                 coping strategies, and emotional reflection. Though it cannot replace professional therapy,
                  Bot AI offers an affordable, always-available solution to those in need of 
                  immediate emotional support, helping to bridge the gap between mental health 
                  services and those seeking assistance.<br /><br />
            <div className="sketchfab-embed-wrapper2">
            {/* Iframe za ugrađeni 3D model sa Sketchfab-a */}
            <iframe src="https://lottie.host/embed/a7a13d83-4df7-4869-a8c1-aa822289e58b/kidGdzrb82.json"></iframe>
          </div>
            </p>
        </div>
      </main>
    </section>
  );
};

export default AboutUsGUI;
