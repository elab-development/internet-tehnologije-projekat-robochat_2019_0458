import React from 'react';
import useImage from './useImage';
import './Pocetna.css';

const Pocetna = () => {
  const { images, loading } = useImage('texting at home', 2);

  return (
    <div className='home-stranica'>
      <div className="home">
        <h1>Hello, welcome to RoboChat!</h1>
        <p>AI IS THE FUTURE.</p>
        <div className="tech-image-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            images.map((image, index) => (
              <img key={index} src={image} alt={`Random Tech Image ${index + 1}`} className="tech-image" />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Pocetna;

