import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/svg/logo";
import { ImMic, ImUser } from "react-icons/im";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SearchList } from "../../utils/types";

const Sidebar: React.FC = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, updateSearchResult] = useState<string[]>([]);
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&key=${process.env.REACT_APP_NEW_API_KEY}&`;

  const fetchData = useCallback(() => {
    fetch(url + new URLSearchParams({ q: searchKey }))
      .then((response) => response.json())
      .then((data) => {
        const searchNames = data.items.map((name: SearchList) =>
          name.snippet.title.split("#")[0].replace(/[^A-Za-z][^0-9][^/w]/gi, "")
        );
        debugger;
        updateSearchResult(searchNames);
      });
  }, [searchKey]);

  const updateSearchKey = (value: string) => {
    setSearchKey(value);
  };

  // Debouning the search key enter. This will wait till user give 300ms space between typing
  const debounceFunction = function (fn: any, d: number) {
    let timer: NodeJS.Timeout;
    return function (value: string) {
      if (value === "") return;
      // @ts-ignore
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        // @ts-ignore
        updateSearchKey.apply(context, arguments);
      }, d);
    };
  };
  const improvisedCall = debounceFunction(updateSearchKey, 300);

  useEffect(() => {
    if (searchKey !== "") fetchData();
  }, [searchKey]);

  return (
    <div className="flex navbar justify-between fixed w-full bg-white top-0 p-5 z-10">
      <div className="inline-flex my-3 ">
        <AiOutlineMenu
          className={`bg-white text-dark-purple text-xl font-serif cursor-pointer`}
          //onClick={() => setOpen(!open)}
        />
        <Logo />
      </div>
      <div className="ml-10 flex w-4/12">
        <div className="grow relative">
          <label className="relative block">
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-2xl py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm shadow-inner"
              placeholder="Search"
              type="text"
              name="search"
              onKeyUp={(e) => improvisedCall(e.currentTarget.value)}
            />
            <span className="sr-only">Search</span>
            <span className="absolute justify-center inset-y-0 h-full w-12 right-0 flex items-center pr-2 bg-gray-200 border-slate-300 rounded-r-2xl ">
              <AiOutlineSearch />
            </span>
          </label>
          <div
            className={`searchResult absolute bg-white border border-gray-300 shadow-2xl px-5 py-3 mt-1 rounded-xl w-full h-96 overflow-y-auto no-scrollbar ${
              searchResult.length == 0 ? `hidden` : ""
            }`}
          >
            {searchResult.map((items) => {
              return <h3 className="py-2 cursor-pointer">{items}</h3>;
            })}
          </div>
        </div>
        <div className="text-2xl mx-5 my-2">
          <ImMic
            onClick={() =>
              window.confirm("Audio upload currently not supportive!")
            }
            className=" cursor-pointer"
          />
        </div>
      </div>

      <div className="text-2xl  inline-flex justify-center align-middle">
        <label htmlFor="uploadFile">
          <input
            type="file"
            id="uploadFile"
            className="hidden"
            name="avatar"
            accept="video/*"
          />
          <RiVideoAddLine className="m-2  cursor-pointer" />
        </label>
        <IoMdNotificationsOutline
          onClick={() => window.confirm("No new notifications!")}
          className="m-2  cursor-pointer"
        />
        <ImUser className=" block top-0 rounded-2xl border border-slate-300 text-2xl h-10 w-10 cursor-pointer " />
      </div>
    </div>
  );
};

export default Sidebar;
