import { useState, useEffect } from 'react';
import axios from 'axios';

const useImage = (query, perPage) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = 'wuhSEjGr9Ic6P6cdnleyLniY8pPH7reJzUNKVoM7R9tWyjxoqspr2PZb'; // Replace with your Pexels API key
        const response = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}`, {
          headers: {
            'Authorization': apiKey,
          },
        });

        const imageUrls = response.data.photos.map(photo => photo.src.medium);
        setImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, perPage]);

  return { images, loading };
};

export default useImage;