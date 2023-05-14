import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillHome,
  AiOutlineVideoCamera,
  AiOutlineHistory,
  AiOutlineLike,
} from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineSubscriptions,
  MdLibraryBooks,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);

  let Menus = [
    {
      label: "home",
      icon: <AiFillHome size={24} />,
    },
    {
      label: "shorts",
      icon: <AiOutlineVideoCamera size={24} />,
    },
    {
      label: "subscribe",
      icon: <MdOutlineSubscriptions size={24} />,
    },
    {
      label: "Library",
      icon: <MdLibraryBooks size={24} />,
    },
    {
      label: "History",
      icon: <AiOutlineHistory size={24} />,
    },
    {
      label: "Liked",
      icon: <AiOutlineLike size={24} />,
    },
    {
      label: "show more",
      icon: <MdOutlineArrowDropDownCircle size={24} />,
    },
    {
      label: "Liked",
      icon: <AiOutlineLike size={24} />,
    },
    {
      label: "show more",
      icon: <MdOutlineArrowDropDownCircle size={24} />,
    },
    {
      label: "Liked",
      icon: <AiOutlineLike size={24} />,
    },
    {
      label: "show more",
      icon: <MdOutlineArrowDropDownCircle size={24} />,
    },
    {
      label: "Liked",
      icon: <AiOutlineLike size={24} />,
    },
    {
      label: "show more",
      icon: <MdOutlineArrowDropDownCircle size={24} />,
    },
  ];
  return (
    <div>
      <nav className="border-b top-0 left-0 w-full fixed h-16 z-10 px-5 flex justify-between">
        <div className="flex items-center gap-x-2 ">
          <button
            className="hover:bg-gray-100 w-10 h-10 rounded-full ml-2 flex justify-center items-center"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineMenu size={24} />
          </button>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/04/YouTube-logo.png"
            alt="img not Found"
            className="w-14"
          />
        </div>
        <div className="flex flex-col w-1/2 my-2">
          <form className="flex">
            <input
              className="border border-slate-300 rounded-l border-r-0 h-10 flex-1 px-3"
              placeholder="Search"
            />
            <button className="border border-slate-300 rounded-r border-l-0 h-10 flex justify-center items-center w-16 text-slate-400">
              <AiOutlineSearch size={24} />
            </button>
          </form>
        </div>
        <div className="flex items-center gap-x-2 ">
          <button className="hover:bg-gray-100 w-10 h-10 rounded-full ml-2 flex justify-center items-center">
            <BiVideoPlus size={24} />
          </button>
          <button className="hover:bg-gray-100 w-10 h-10 rounded-full ml-2 flex justify-center items-center">
            <IoIosNotificationsOutline size={24} />
          </button>
          <button className="hover:bg-gray-100 w-10 h-10 rounded-full ml-2 flex justify-center items-center">
            <CgProfile size={24} />
          </button>
        </div>
      </nav>
      <aside
        className=" overflow-auto border-r fixed h-full top-0 left mt-16 flex flex-col px-5 py-2 gap-y-5"
        style={{ width: open ? 250 : 70, transition: "0.2s" }}
      >
        {Menus?.map((items) => (
          <button
            className={`flex ${open ? "flex-row  " : "flex-col "} ${
              open ? "items-start" : "items-center"
            }gap-x-5 rounded-lg hover:bg-gray-100`}
          >
            <span className={`text-slate-700 ${open ? "mx-2" : "mx-0"}`}>
              {items?.icon}
            </span>
            <span
              className={`text-slate-700 capitalize ${open ? null : "text-xs"}`}
            >
              {open ? items.label : items.label.slice(0, 5)}
            </span>
          </button>
        ))}
      </aside>
      <section
        className="mt-16 p-5"
        style={{ marginLeft: open ? 250 : 70, transition: "0.2s" }}
      >
        <h1>{children}</h1>
      </section>
    </div>
  );
};

export default Layout;
