import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPlaystation, BsCollectionPlay } from "react-icons/bs";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { Outlet } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="basis-1/12 mr-4 h-screen flex-col fixed w-24 hidden md:flex sm:block...">
        <div className="hover:bg-slate-50 hover:rounded-lg h-16 p-2 grid justify-items-center cursor-pointer">
          <div className="text-2xl">
            <AiFillHome />
          </div>
          <div className="text-xs">Home</div>
        </div>
        <div className="hover:bg-slate-50 hover:rounded-lg h-16 p-2 grid justify-items-center cursor-pointer">
          <div className="text-2xl">
            <BsPlaystation />
          </div>
          <div className="text-xs">Shorts</div>
        </div>
        <div className="hover:bg-slate-50 hover:rounded-lg h-16 p-2 grid justify-items-center cursor-pointer">
          <div className="text-2xl">
            <BsCollectionPlay />
          </div>
          <div className="text-xs">Subscriptions</div>
        </div>
        <div className="hover:bg-slate-50 hover:rounded-lg h-16 p-2 grid justify-items-center cursor-pointer">
          <div className="text-2xl">
            <MdOutlineVideoLibrary />
          </div>
          <div className="text-xs font-sans">Library</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Sidebar;
