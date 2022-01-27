import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [person, setPerson] = useState(people[0]);
  const { id, name, job, image, text } = person;

  const prevPerson = () => {
    if (id === people[0].id) {
      setPerson(people[people.length - 1]);
    } else {
      setPerson(people[id - 2]);
    }
  };

  const nextPerson = () => {
    if (id === people[people.length - 1].id) {
      setPerson(people[0]);
    } else {
      setPerson(people[id]);
    }
  };

  const randomPerson = () => {
    const pos = Math.floor(Math.random() * people.length);
    if (id === people[pos].id && people.length > 1) {
      return randomPerson();
    }
    setPerson(people[pos]);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
