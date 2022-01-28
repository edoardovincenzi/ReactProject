import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";


const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState([]);
  const [tabSelected, setCompanyTabSelected] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok && response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error("Fail call API");
        }
      })
      .then(async (data) => {
        setTabs(data);
        setCompanyTabSelected(data[0]);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) {
    return (
      <div className="section">
        <div className="title">
          <h2>loading...</h2>
          <div className="underline"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((tab) => {
            const style = "job-btn";
            return (
              <button
                key={tab.id}
                className={
                  style + (tabSelected.id === tab.id ? " active-btn" : "")
                }
                onClick={() => setCompanyTabSelected(tab)}
              >
                {tab.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{tabSelected.title}</h3>
          <h4>{tabSelected.company}</h4>
          <p className="job-date">{tabSelected.dates}</p>
          {tabSelected.duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
}

export default App;
