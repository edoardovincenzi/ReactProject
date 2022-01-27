import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagrapha] = useState([]);

  const concatParagraph = (e) => {
    e.preventDefault();

    if (count > 0) {
      setParagrapha(data.slice(0, count));
    }
    if (count > data.length) {
      setParagrapha(data.slice(0, data.length));
    }
    console.log(data.length);
  };

  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={concatParagraph}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
