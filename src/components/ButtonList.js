import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "Cooking",
    "Valentines",
    "Crickets",
    "Soccers",
    "Cookings",
    "Valentiness",
  ];
  return (
    <div className="flex overflow-x-auto">
      {list.map((button, index) => (
        <Button name={button} key={button} />
      ))}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Cooking" />
      <Button name="Valentines" /> */}
    </div>
  );
};

export default ButtonList;
