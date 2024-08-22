import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Games",
  "Thoughts",
  "Sex",
  "4:20",
  "CR7",
  "Motivation",
  "ADHD",
  "Olympics",
  "Movies",
  "News",
  "Elections",
];

const ButtonList = () => {
  return (
    <div className="flex mt-2">
      {list.map((item, i) => (
        <Button name={item} key={i} />
      ))}
    </div>
  );
};

export default ButtonList;
