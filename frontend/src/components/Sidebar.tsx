import React, { useState } from "react";
import { Link } from "react-router-dom";
import contactIcon from "../assets/images/user-group.svg";
import chartBarIcon from "../assets/images/chart-bar-icon.svg";
import accountIcon from "../assets/images/account-icon.svg";
import supportIcon from "../assets/images/support-icon.svg";
import knowledgebaseIcon from "../assets/images/knowledgebase-icon.svg";

import collapseIcon from "../assets/images/collapse-icon.svg";
import logoMini from "../assets/images/Taiyo-logo-mini.png";
import logo from "../assets/images/Taiyo-logo.png";
import addContactIcon from "../assets/images/plus-circle-icon.svg";

const Sidebar: React.FC = () => {
  const pathname = window.location.pathname;
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

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
          href: "/support",
          icon: supportIcon,
        },
        {
          title: "Knowledgebase",
          href: "/knowledgebase",
          icon: knowledgebaseIcon,
        },
      ],
    },
  ];

  return (
    <section className="relative lg:block hidden">
      <div className="absolute right-[-11px] top-[38px] z-50">
        <button
          onClick={() => setIsCollapsedSidebar((prevState) => !prevState)}
        >
          <img
            src={collapseIcon}
            className={`duration-[0.4s] transform ${
              isCollapsedSidebar ? "rotate-180" : "rotate-0"
            }`}
            width={22}
            height={22}
            alt="collapse icon"
          />
        </button>
      </div>
      <aside
        className={`${
          isCollapsedSidebar ? "w-[60px]" : "w-[271px]"
        } h-screen flex flex-col justify-between bg-[#1F2537] text-white text-[14px] leading-[20px] overflow-hidden `}
        data-collapse={isCollapsedSidebar ? "true" : "false"}
        style={{ transition: "all 0.3s ease, transform 0.3s ease" }}
      >
        <div className="">
          <div
            className={`sidebar-head pt-[var(--sidebar-head-padding-top)] ${
              isCollapsedSidebar
                ? "pb-[var(--sidebar-head-padding-bottom-collapsed)]"
                : "pb-[var(--sidebar-head-padding-bottom-expanded)]"
            }`}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="logo">
                <img
                  src={`${isCollapsedSidebar ? logoMini : logo}`}
                  width={isCollapsedSidebar ? 32 : 150}
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
                      isCollapsedSidebar
                        ? "w-[34px] justify-center"
                        : "w-[216px] pl-[32px]"
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
                isCollapsedSidebar ? "sidebar-divider--collapsed" : ""
              }`}
            ></div>
          </div>
          <div
            className={`pt-[77px] ${
              isCollapsedSidebar ? "flex justify-center" : "pl-[44px]"
            }`}
          >
            <button
              className={`${
                isCollapsedSidebar
                  ? "w-[34px] h-[34px] flex justify-center items-center"
                  : "px-[40px]"
              } py-[9px] rounded-[5px] bg-[#F0564F] hover:bg-[#F0564F] text-[13px] font-semibold`}
              title="Add New Contact"
            >
              {isCollapsedSidebar ? (
                <img
                  src={addContactIcon}
                  height={18}
                  width={18}
                  alt="add-contact"
                />
              ) : (
                <div className="whitespace-nowrap">Add Contact</div>
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
                      isCollapsedSidebar
                        ? "w-[34px] justify-center"
                        : "w-[216px] pl-[32px]"
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
