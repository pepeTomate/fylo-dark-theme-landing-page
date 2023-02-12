import { Flexbox } from "@/styles/Flexbox";
import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FyloLogo } from "../FyloLogo";
import iconLocation from "@/assets/icon-location.svg";
import iconPhone from "@/assets/icon-phone.svg";
import iconEmail from "@/assets/icon-email.svg";
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <FooterStyle>
      <Flexbox className="Fylo-logo">
        <FyloLogo />
      </Flexbox>
      <Grid container spacing={1}>
        <Grid item xs = {12 } lg={3.5} className="Footer">
          <Flexbox className="Fylo-info">
            <Flexbox>
              <img src={iconLocation} />
            </Flexbox>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </Flexbox>
        </Grid>
        <Grid item lg={2.5} xs={12} className="Footer">
          <ul>
            <li>
              <Flexbox className="phoneIcon">
                <img src={iconPhone} />
                <a>+53 55-82-0594</a>
              </Flexbox>
            </li>
            <li>
              <Flexbox className="emailIcon">
                <img src={iconEmail} />
                <a>example@fylo.com</a>
              </Flexbox>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} xs={12} className="Footer">
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} xs={12} className="Footer">
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Terms </a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </ul>
        </Grid>
        <Grid item lg={2} xs={12} className="Footer">
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Twitter </a>
            </li>
            <li>
              <a>Whatsapp</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </FooterStyle>
  );
};

export const FooterStyle = styled.div`
  background-color: hsl(216, 53%, 9%);
  padding: 3rem 3rem;
  margin: 0;
  width: 100%;

  @media (min-width: 1201px) {
    .Fylo-logo {
      margin: 3rem 0 0.5rem 0;
    }
  }

  @media (max-width: 1200px) {
    .Fylo-logo {
    padding-top: 8rem;
    width: 100%;
  }

  }

  & .Footer {
    margin: 2rem 0;
  }

  & ul {
    list-style-type: none;

    & li  a {
      color: #ffffffae;

      :hover {
        color: white;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  & .Fylo-logo {
    margin: 3rem 0 0.5rem 0;
    width: 100%;
  }

  & .Fylo-info {
    align-items: flex-start;
  }

  & .Fylo-info img {
    margin: 0.25rem 0.75rem 0 0;
    max-width: 0.8rem;
    height: 1rem;
  }

  & li img {
    max-width: 1rem;
    height: 1rem;
  }

  & .phoneIcon,
  .emailIcon {
    margin-bottom: 1rem;
    align-items: center;
    & img {
      margin-right: 1.5rem;
    }
  }
`;

export default Footer;
