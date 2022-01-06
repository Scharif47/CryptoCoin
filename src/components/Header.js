import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// Styled Components

const BurgerMenu = styled.div`
  border: 2px solid black;
  cursor: pointer;
  z-index: 900;
`;

const HeaderBar = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.2rem 0.3rem 0.4rem rgba(0, 0, 0, 0.4);
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
    <header className="h-20">
      <HeaderBar>
        <BurgerMenu onClick={BurgerMenuHandler}>{renderIcon}</BurgerMenu>
        <p className="">CryptoCoin</p>
      </HeaderBar>

      <Navbar isOpen={isOpen} />
    </header>
  );
}

export default Header;
