import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/Taiyo-logo.png";
import bellIcon from "../assets/images/bell-icon.svg";
import bellIconLight from "../assets/images/bell-icon-light.svg";
import profile from "../assets/images/avatar.png";
import verticalCollapseIcon from "../assets/images/vertical-collapse-icon.svg";
import collapseIconLight from "../assets/images/collapse-icon-light.svg";
import menuAccountIcon from "../assets/images/menu-account-icon.svg";
import signoutIcon from "../assets/images/signout-icon.svg";
import hamburgerMenuIcon from "../assets/images/hamburger-menu-icon.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpened(false);
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, []);

  return (
    <header>
      <div className="w-full md:h-[74px] h-[72px] max-[1024px]:bg-[#1F2537] flex justify-between items-center px-[33px] relative">
        <div>
          <img
            src={logo}
            height={30}
            width={123}
            className="lg:hidden"
            alt="brand-logo"
          />
        </div>
        <div className="flex items-center gap-[31px]">
          <div className="flex items-center gap-[16px]">
            <div>
              <img
                src={bellIcon}
                className="max-[1024px]:hidden"
                height={26}
                width={22}
                alt="bell-icon"
              />
              <img
                src={bellIconLight}
                className="lg:hidden"
                height={19}
                width={16}
                alt="bell-icon-light"
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <div
                className="w-[41px] h-[41px] rounded-[41px] overflow-hidden bg-[#f0574f7d]"
                data-name="profile"
              >
                <img src={profile} height={41} width={41} alt="profile" />
              </div>
              <div ref={menuRef}>
                <button
                  className="flex items-center gap-[5px]"
                  onClick={() => setIsMenuOpened((prevState) => !prevState)}
                >
                  <h1 className="max-[768px]:hidden lg:text-black text-[#F6F7FA]">
                    Rajesh Biswas
                  </h1>
                  <div>
                    <img
                      src={verticalCollapseIcon}
                      className="max-[1024px]:hidden"
                      height={7}
                      width={13}
                      alt="collapse"
                    />
                    <img
                      src={collapseIconLight}
                      className="lg:hidden"
                      height={7}
                      width={13}
                      alt="collapse"
                    />
                  </div>
                </button>
                <div
                  className={`absolute z-[999] md:top-[70px] top-[80px] right-[30px] w-[177px] flex flex-col py-[5px] rounded-[10px] menu-box-shadow bg-[#F2F2F2] ${
                    isMenuOpened ? "" : "hidden"
                  }`}
                >
                  <div className="pl-[21px] pr-[8px] py-[10px]">
                    <Link to="#" className="flex items-center gap-[10px]">
                      <div>
                        <img
                          src={menuAccountIcon}
                          height={15}
                          width={14}
                          alt="account"
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] text-[#424242]">
                          My Account
                        </h1>
                      </div>
                    </Link>
                  </div>
                  <div className="pl-[21px] pr-[8px] py-[10px]">
                    <Link to="#" className="flex items-center gap-[10px]">
                      <div>
                        <img
                          src={signoutIcon}
                          height={14}
                          width={14}
                          alt="sign out"
                        />
                      </div>
                      <div>
                        <h1 className="text-[14px] text-[#424242]">Sign Out</h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="flex items-center lg:hidden">
              <img src={hamburgerMenuIcon} height={19} width={25} alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
