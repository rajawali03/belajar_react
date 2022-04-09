import React, { useEffect, useState } from "react";
import People from "./People";

const Starwars = () => {
  const [peoples, setPeoples] = useState([]);
  const [people, setPeople] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeoples(data.results);
        console.log(data.results);
    });
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "gray",
        }}
      >
        {peoples.map((value) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              backgroundColor: value.eye_color,
              flexDirection: "row",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
            onClick={() => setPeople(value)}
          >
            {value.name}
          </div>
        ))}
      </div>
      {people.name ? <People props={people} /> : <></>}
    </>
  );
};

export default Starwars;