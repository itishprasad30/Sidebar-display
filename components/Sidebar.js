import {
  BsPlus,
  BsFillLightningFill,
  BsGearFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Sidebar = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="fixed  top-0 left-0 h-screen w-16 m-0 flex flex-col justify-center bg-gray-900  text-white shadow-lg ">
      <SideBarIcon icon={<BsPlus size="32" />} text="plus icon" />
      <SideBarIcon icon={<BsFillLightningFill size="24" />} text="Tesla icon" />
      <SideBarIcon icon={<BsGearFill size="24" />} text=" Setting " />
      <SideBarIcon icon={<FaFire size="24" />} text=" Trending" />
      <SideBarIcon icon={<BsFillPersonFill size="24" />} text="User " />
      <SideBarIcon icon={<AiFillApi size="24" />} text="Api connection" />

      <button onClick={() => setOpen(false)}>
        <ArrowCircleLeftIcon className="sidebar-icon " />
      </button>
    </div>
  );
};

export default Sidebar;

const SideBarIcon = ({ icon, text }) => {
  return (
    <div className="sidebar-icon group ">
      {icon}
      <span className="sidebar-text group-hover:scale-100">{text}</span>
    </div>
  );
};
