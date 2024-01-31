import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pocetna.css';

const Pocetna = () => {
    const [techImages, setTechImages] = useState([]);

    useEffect(() => {
        const fetchTechImages = async () => {
            try {
                const apiKey = 'wuhSEjGr9Ic6P6cdnleyLniY8pPH7reJzUNKVoM7R9tWyjxoqspr2PZb'; // Replace with your Pexels API key
                const response = await axios.get('https://api.pexels.com/v1/search?query=texting%20at%20home&per_page=2', {
                    headers: {
                        'Authorization': apiKey,
                    },
                });

                const techImagesData = response.data.photos.map(photo => photo.src.medium);
                setTechImages(techImagesData);
            } catch (error) {
                console.error('Error fetching tech images:', error);
            }
        };

        fetchTechImages();
    }, []);

    return (
        <div className='home-stranica'>
            <div className="home">
                <h1>Hello, welcome to RoboChat!</h1>
                <p>AI IS THE FUTURE.</p>
                <div className="tech-image-container">
                    {techImages.map((techImage, index) => (
                        <img key={index} src={techImage} alt={`Random Tech Image ${index + 1}`} className="tech-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pocetna;
