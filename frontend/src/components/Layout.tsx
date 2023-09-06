import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`flex relative h-screen `}>
      <Sidebar />
      <div className="overflow-y-scroll w-full bg-[#F2F2F2] relative">
        <Header />
        <main className="min-h-screen max-[768px]:px-[30px] max-[1024px]:pt-[39px]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
