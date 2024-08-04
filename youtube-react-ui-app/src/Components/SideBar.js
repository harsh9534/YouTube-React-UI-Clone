import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? null : (
    <div className="w-48  shadow-md m-2 p-5">
      <ul>
        <li>Sports</li>
        <li>Music</li>
        <li>Thoughts</li>
        <li>Food</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Sports</li>
        <li>Music</li>
        <li>Thoughts</li>
        <li>Food</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Sports</li>
        <li>Music</li>
        <li>Thoughts</li>
        <li>Food</li>
      </ul>
    </div>
  );
};

export default SideBar;
