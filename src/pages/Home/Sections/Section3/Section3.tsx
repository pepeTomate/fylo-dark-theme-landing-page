import { Grid, Link } from "@mui/material";
import React from "react";
import styled from "styled-components";
export interface Section3Interface {}
import img from "@/assets/illustration-stay-productive.png";
import checkedIcon from "@/assets/icon-arrow.svg";
import { Flexbox } from "@/styles/Flexbox";

const Section3: React.FC<Section3Interface> = () => {
  return (
    <Section3Style>
      <Grid
        spacing={8}
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <Flexbox className="Stay-productive"><img src={img} /></Flexbox>
        </Grid>
        <Grid item md={6} xs={12} sx={{ paddingRight: "5rem" }}>
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link href="#" className="Link">
            See how Fylo works 
            <img src={checkedIcon}/>
          </Link>
        </Grid>
      </Grid>
    </Section3Style>
  );
};

export const Section3Style = styled.div`
  background-color: hsl(218, 28%, 13%);
  padding: 0 3rem;
  margin: 3rem 0;
  
  & h1 {
    padding-right: 5rem;
  }

  @media (max-width: 900px) {
    align-items: center;
    place-content: center;
    padding
    
    h1 {
      padding-right: 0;
    }
  }

  & p {
    margin: 1rem 0;
  }

  & .Stay-productive {
    width: 100%;
    object-fit: contain;
    /* min-width: 100px; */
  }

  & .Link {
    color:hsl(176, 68%, 64%);
    outline-color: hsl(176, 68%, 64%);
    display: flex;
    align-items: center;


    & > img {
      max-width: 1rem;
      max-height: 1rem;
      margin-left: 0.5rem;
    }

    :hover {
      color: white;
      outline-color: white;
    }
  }
`;

export default Section3;
