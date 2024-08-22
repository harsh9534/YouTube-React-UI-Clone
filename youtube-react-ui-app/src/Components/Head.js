import React, { useEffect, useState } from "react";
import UserLogo from "../utils/download.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import { SUGG_API } from "../utils/constants";
import SuggList from "./SuggList";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggList, setSuggList] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => sendSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const sendSuggestions = async () => {
    const data = await fetch(SUGG_API + searchQuery);
    const json = await data.json();
    setSuggList(json[1]);
    console.log(suggList);
  };

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
      <div className=" col-span-10 px-10 relative">
        <div>
          <input
            type="text"
            className="w-6/12 border border-solid border-gray-400 rounded-l-full px-4 py-2 cursor-pointer"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          ></input>
          <button className="bg-gray-100 rounded-r-full px-5 py-2 border border-solid border-gray-400">
            🔍
          </button>
        </div>

        {showSugg && (
          <div>{suggList.length ? <SuggList suggList={suggList} /> : ""}</div>
        )}
      </div>

      <div className="col-span-1 flex justify-center items-center">
        <img className="h-8" alt="user" src={UserLogo}></img>
      </div>
    </div>
  );
};

export default Head;
