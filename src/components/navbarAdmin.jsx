// NavbarAdmin.js
import React, { useState } from "react";
import {
  MdSpaceDashboard,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FcShop } from "react-icons/fc";

const navLinks = [
  {
    name: "Dashboard",
    icon: MdSpaceDashboard,
  },
  {
    name: "kelola produk",
    icon: MdOutlineProductionQuantityLimits,
  },
  {
    name: "kelola pesanan",
    icon: FaShopify,
  },
];

const variants = {
  Expanded: {
    width: "20%",
  },
  nonExpanded: { width: "5%" },
};

function NavbarAdmin({ className, activeNavItem, onSelectNavItem }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleItemClick = (item) => {
    onSelectNavItem(item);
    setIsExpanded(true); 
  };

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={`px-2 py-12 flex flex-col border border-r-1 w-1/5 h-screen bg-[#FF9364] relative fixed ${
        className || ""
      }`}
    >
      <div className="logo-div flex space-x-3 items-center">
        <FcShop className="text-3xl font-bold" />
        <span
          className={"text-2xl font-bold " + (isExpanded ? "block" : "hidden")}
        >
          SpareCycle
        </span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 text-2xl  rounded absolute -right-2 top-14 flex items-center justify-center cursor-pointer"
      >
        <FaArrowRightArrowLeft />
      </div>

      <div className="mt-10 flex flex-col space-y-8 cursor-pointer">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 items-center p-2" +
              (activeNavItem === item.name ? " text-white font-semibold" : "")
            }
            onClick={() => handleItemClick(item.name)}
          >
            <item.icon className={!isExpanded ? "text-xl" : ""} />
            <span className={isExpanded ? "block" : "hidden"}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavbarAdmin;
