import React from "react";
import UserLogo from "../utils/download.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 mx-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 p-1 my-1 hover:cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"
        ></img>
        <img
          className="h-11 ml-3 "
          alt="yt-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
        ></img>
      </div>
      <div className="flex col-span-10 justify-center">
        <input
          type="text"
          className="w-6/12 border border-solid border-gray-400 rounded-l-full"
        ></input>
        <button className="bg-gray-100 rounded-r-full px-5 py-2 border border-solid border-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <img className="h-8" alt="user" src={UserLogo}></img>
      </div>
    </div>
  );
};

export default Head;
