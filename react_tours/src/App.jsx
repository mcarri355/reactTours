import React, { useState, useEffect } from 'react';
import './App.css';
import Tour from './components/Tour';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  const handleNotInterested = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIsError(false);
    fetch('https://course-api.com/react-tours-project')
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  };

  if (isLoading) {
    return <div><h1>Loading....</h1></div>;
  }

  if (isError) {
    return <div><h1>Error....</h1></div>;
  }

  return (
    <div className="app-container">
      <div className="nav-bar">
        <h1 className="sticky-title">Tours</h1>
        <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
      </div>
      <div className="tours-container">
        {tours.map((tour) => (
          <Tour
            key={tour.id}
            tour={tour}
            onNotInterested={() => handleNotInterested(tour.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


