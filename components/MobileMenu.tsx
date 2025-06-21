"use client";
import { AlignLeft } from "lucide-react";
import { useState } from "react";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div className="flex gap-1">
      <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer md:gap-0" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setIsSideMenuOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
