import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const BurgerMenu = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 0;
  border: 2px solid black;
  cursor: pointer;
  z-index: 900;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const BurgerMenuHandler = () => setIsOpen(!isOpen);

  const renderIcon = isOpen ? (
    <XIcon className="h-10 w-10 " />
  ) : (
    <MenuIcon className="h-10 w-10 " />
  );

  return (
    <header className=" mb-20 ">
      <BurgerMenu onClick={BurgerMenuHandler}>{renderIcon}</BurgerMenu>

      <Navbar isOpen={isOpen} />
    </header>
  );
}

export default Header;
