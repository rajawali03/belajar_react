import React from "react";

const People = ({ props }) => {
  console.log(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
        margin: 4,
        backgroundColor: "black",
        color: "white",
        fontWeight: 700
      }}
    >
      <p>Name: {props?.name}</p>
      <p>Height: {props?.height}</p>
      <p>Mass: {props?.mass}</p>
      <p>Skin Color: {props?.skin_color}</p>
      <p>Eye Color: {props?.eye_color}</p>
      <p>Birth Year: {props?.birth_year}</p>
      <p>Gender: {props?.gender}</p>
    </div>
  );
};

export default People;
