import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const getTours = () => {
    fetch(url)
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not OK");
        }
      })
      .then((data) => setTours(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours && tours.length === 0) {
    return (
      <main>
        <h2>No tours left</h2>
        <button type="button" className="btn" onClick={() => getTours()}>
          Refresh
        </button>
      </main>
    );
  }
  console.log(tours);
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
