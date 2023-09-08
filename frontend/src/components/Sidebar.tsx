import React from "react";
import { Link, useNavigate } from "react-router-dom";
import contactIcon from "../assets/images/user-group.svg";
import chartBarIcon from "../assets/images/chart-bar-icon.svg";
import accountIcon from "../assets/images/account-icon.svg";
import supportIcon from "../assets/images/support-icon.svg";
import knowledgebaseIcon from "../assets/images/knowledgebase-icon.svg";

import collapseIcon from "../assets/images/collapse-icon.svg";
import logoMini from "../assets/images/Taiyo-logo-mini.png";
import logo from "../assets/images/Taiyo-logo.png";
import addContactIcon from "../assets/images/plus-circle-icon.svg";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "../redux/store/store";
import { toggleSidebar } from "../redux/store/slices/SidebarToggleSlice";

const Sidebar: React.FC = () => {
  const pathname = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar);

  const sidebarItems = [
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
          title: "Support",
          href: "#",
          icon: supportIcon,
        },
        {
          title: "Knowledgebase",
          href: "#",
          icon: knowledgebaseIcon,
        },
      ],
    },
  ];

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="relative lg:block hidden">
      <div className="absolute right-[-11px] top-[38px] z-50">
        <button onClick={() => dispatch(toggleSidebar())}>
          <img
            src={collapseIcon}
            className={`duration-[0.4s] transform ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
            width={22}
            height={22}
            alt="collapse icon"
          />
        </button>
      </div>
      <aside
        className={`${
          isSidebarOpen ? "w-[271px]" : "w-[60px]"
        } h-screen flex flex-col justify-between bg-[#1F2537] text-white text-[14px] leading-[20px] overflow-hidden `}
        data-collapse={isSidebarOpen ? "false" : "true"}
        style={{ transition: "all 0.3s ease, transform 0.3s ease" }}
      >
        <div className="">
          <div
            className={`sidebar-head pt-[var(--sidebar-head-padding-top)] ${
              isSidebarOpen
                ? "pb-[var(--sidebar-head-padding-bottom-expanded)]"
                : "pb-[var(--sidebar-head-padding-bottom-collapsed)]"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="logo">
                <img
                  src={`${isSidebarOpen ? logo : logoMini}`}
                  width={isSidebarOpen ? 150 : 32}
                  height={37}
                  alt="Brand logo"
                />
              </div>
            </div>
          </div>
          <div className="sidebar-items flex flex-col items-center gap-[100px]">
            <ul className="flex flex-col gap-1">
              {sidebarItems[0]?.header?.map(({ title, href, icon }, i) => (
                <li key={i} className={`flex items-center mx-auto`}>
                  <Link
                    to={href}
                    className={`flex items-center gap-[11px] ${
                      isSidebarOpen
                        ? "w-[216px] pl-[32px]"
                        : "w-[34px] justify-center"
                    } h-[34px] rounded-[5px] hover:bg-[#2C344B] ${
                      pathname === href ? "active-tab" : ""
                    }`}
                    title={title}
                  >
                    <div>
                      <img src={icon} width={18} height={18} alt={title} />
                    </div>
                    <div className="sidebar-title">
                      <h1>{title}</h1>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`sidebar-divider ${
                isSidebarOpen ? "" : "sidebar-divider--collapsed"
              }`}
            ></div>
          </div>
          <div
            className={`pt-[77px] ${
              isSidebarOpen ? "pl-[44px]" : "flex justify-center"
            }`}
          >
            <button
              className={`${
                isSidebarOpen
                  ? "px-[40px]"
                  : "w-[34px] h-[34px] flex justify-center items-center"
              } py-[9px] rounded-[5px] bg-[#F0564F] hover:bg-[#fb6e66] text-[13px] font-semibold`}
              title="Add New Contact"
              onClick={handleClick}
            >
              {isSidebarOpen ? (
                <div className="whitespace-nowrap">Add Contact</div>
              ) : (
                <img
                  src={addContactIcon}
                  height={18}
                  width={18}
                  alt="add-contact"
                />
              )}
            </button>
          </div>
        </div>
        <div className="sidebar-footer flex flex-col items-center pt-[24px] pb-[80px]">
          <div>
            <ul className="flex flex-col gap-1">
              {sidebarItems[0]?.footer?.map(({ href, icon, title }, i) => (
                <li key={i} className="flex items-center mx-auto">
                  <Link
                    to={href}
                    className={`flex items-center gap-[11px] ${
                      isSidebarOpen
                        ? "w-[216px] pl-[32px]"
                        : "w-[34px] justify-center"
                    } h-[34px] rounded-[5px] hover:bg-[#2C344B] ${
                      pathname === href ? "active-tab" : ""
                    }`}
                    title={title}
                  >
                    <div>
                      <img src={icon} width={15} height={15} alt={title} />
                    </div>
                    <div className="sidebar-title">
                      <h1>{title}</h1>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;
