import React from "react";

const List = ({ people }) => {
  return (
    <ul>
      {people.map(({ id, name, age, image }) => {
        return (
          <li key={id} className="person">
            <img src={image} alt={name} />
            name : {name} age: {age}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
