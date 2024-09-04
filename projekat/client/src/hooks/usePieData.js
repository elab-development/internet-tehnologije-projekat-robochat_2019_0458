// src/hooks/usePieData.js
import { useMemo } from 'react';

const usePieData = (users) => {
  return useMemo(() => {
    // Calculate the counts of each gender
    const genderCounts = users.reduce((acc, user) => {
      acc[user.gender] = (acc[user.gender] || 0) + 1;
      return acc;
    }, {});

    // Prepare the data object for the Pie chart
    return {
      labels: Object.keys(genderCounts),
      datasets: [{
        data: Object.values(genderCounts),
        backgroundColor: ['#36A2EB', '#FF6384',  '#FFCE56'], // Customize colors
      }],
    };
  }, [users]); // Recalculate when users data changes
};

export default usePieData;
