import React from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import contactIcon from "../assets/images/user-group.svg";
import chartBarIcon from "../assets/images/chart-bar-icon.svg";
import accountIcon from "../assets/images/account-icon.svg";
import gitHubIcon from "../assets/images/github-circular.png";
import linkedinIcon from "../assets/images/linkedin.png";

import closeIcon from "../assets/images/close-icon-light.svg";
import { RootState } from "../redux/store/store";
import { closeMenu } from "../redux/store/slices/MenuToggleSlice";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const pathname = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMenuOpen = useSelector((state: RootState) => state.menu);
  const menuItems = [
    {
      header: [
        {
          title: "Contacts",
          href: "/",
          icon: contactIcon,
        },
        {
          title: "Charts and Maps",
          href: "/charts-and-maps",
          icon: chartBarIcon,
        },
        {
          title: "My Account",
          href: "/myaccount",
          icon: accountIcon,
        },
      ],
      footer: [
        {
          title: "LinkedIn Profile",
          href: "https://www.linkedin.com/in/rajesh-biswas72/",
          icon: linkedinIcon,
        },
        {
          title: "Github Repository",
          href: "https://github.com/rjrobocoder/taiyo",
          icon: gitHubIcon,
        },
      ],
    },
  ];

  const handleMenu = () => {
    dispatch(closeMenu());
  };

  const handleNavigate = (href: string) => {
    handleMenu();
    navigate(href);
  };

  return (
    <section
      className={`w-full h-screen bg-[#1F2537] absolute z-[9999] lg:hidden ${
        isMenuOpen ? "" : "hidden"
      }`}
    >
      <button className="absolute top-[24px] right-[24px]" onClick={handleMenu}>
        <img src={closeIcon} alt="close-menu" />
      </button>
      <menu className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center">
          <div className="sidebar-items flex flex-col items-center gap-[100px]">
            <ul className="flex flex-col gap-1">
              {menuItems[0]?.header?.map(({ title, href, icon }, i) => (
                <li key={i} className={`flex items-center mx-auto`}>
                  <button
                    onClick={() => handleNavigate(href)}
                    className={`flex items-center gap-[11px] w-[216px] pl-[32px] h-[34px] rounded-[5px] hover:bg-[#2C344B] ${
                      pathname === href ? "active-tab" : ""
                    }`}
                    title={title}
                  >
                    <div>
                      <img src={icon} width={18} height={18} alt={title} />
                    </div>
                    <div className="sidebar-title">
                      <h1 className="text-white">{title}</h1>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            <div className={`sidebar-divider`}></div>
          </div>
          <div className={`pt-[77px]`}>
            <button
              className={`px-[40px] py-[9px] rounded-[5px] bg-[#F0564F] hover:bg-[#fb6e66] text-[13px] font-semibold`}
              title="Add New Contact"
              onClick={() => handleNavigate("/")}
            >
              <div className="whitespace-nowrap text-white">Add Contact</div>
            </button>
          </div>
        </div>
        <div className="sidebar-footer flex flex-col items-center pt-[24px] ">
          <div>
            <ul className="flex flex-col gap-1">
              {menuItems[0]?.footer?.map(({ href, icon, title }, i) => (
                <li key={i} className="flex items-center mx-auto">
                  <Link
                    to={href}
                    className={`flex items-center gap-[11px] w-[216px] pl-[32px] h-[34px] rounded-[5px] hover:bg-[#2C344B] ${
                      pathname === href ? "active-tab" : ""
                    }`}
                    title={title}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img src={icon} width={15} height={15} alt={title} />
                    </div>
                    <div className="sidebar-title">
                      <h1 className="text-white">{title}</h1>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </menu>
    </section>
  );
};

export default Menu;
