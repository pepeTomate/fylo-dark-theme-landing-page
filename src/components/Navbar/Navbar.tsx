import React from "react";
import styled from "styled-components";
import { FyloLogo } from "../FyloLogo";
import { Box, List } from "@mui/material";
import { Flexbox } from "@/styles/Flexbox";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <NavbarStyle>
      <Flexbox className="Fylo-logo">
        <FyloLogo />
      </Flexbox>
      <ul>
        <li><a>Features</a></li>
        <li><a>Team</a></li>
        <li><a>Sign In</a></li>
      </ul>
    </NavbarStyle>
  );
};

export const NavbarStyle = styled.div`
  display: flex;
  place-content: space-between;
  align-items: center;
  background-color: hsl(217, 28%, 15%);
  max-width:100rem;	
  
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 600px) {
    padding: 4rem 1rem 0 1rem;
    place-content: space-around;
    & a {
      font-size: 1rem;
    }

    & .Fylo-logo {
      width: 7rem;
    }

    & > ul {
    font-size: 1rem;
    gap: 1rem;
   }
  }

  @media (min-width: 600px) {
    padding: 4rem 3rem 0 3rem;
    
    & > ul {
    font-size: 1.5rem;
    gap: 1.5rem;
   }
  }

  & > ul {
    list-style-type: none;
    display: flex;
    color: #ffffffa9;
    cursor: pointer;

    & a:hover {
      color: white;
      text-decoration: underline;

    }
  }
`;

export default Navbar;
