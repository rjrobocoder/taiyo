import React from "react";
import heartIcon from "../assets/images/heart-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="pb-[19px] pr-[14px] flex flex-row-reverse max-[768px]:justify-center">
      <div className="flex">
        <div>
          <h1 className="text-[14px] text-black leading-[20px]">
            &copy; 2023 Taiyo
          </h1>
        </div>
        <div className="flex items-center pl-[8px]">
          <div>
            <img src={heartIcon} height={18} width={18} alt="heart" />
          </div>
          <h1 className="text-[14px] text-black leading-[20px]">Rajesh</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
