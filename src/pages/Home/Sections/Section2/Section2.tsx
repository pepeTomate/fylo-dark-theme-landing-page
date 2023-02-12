import React from "react";
import styled from "styled-components";
import { Section2Item } from "./Section2Item";
export interface Section2Interface {}
import accessImg from "@/assets/icon-access-anywhere.svg";
import securityImg from "@/assets/icon-security.svg";
import collaborationImg from "@/assets/icon-collaboration.svg";
import anyFileIMG from "@/assets/icon-any-file.svg";
import { CustomGrid } from "@/styles/CustomGrid";
import { Grid } from "@mui/material";

const Section2: React.FC<Section2Interface> = () => {
  return (
    <Section2Style>
      <CustomGrid
		container
		direction="row"
		justifyContent="space-evenly"
		alignItems="center"
    sx={{zIndex: "5"}}
	  >
        <Grid textAlign="center" item md={12} lg={6}>
          <Section2Item
            media={accessImg}
            header="Access your files, anywhere"
            content="The ability to use a smartphone, tablet, or computer to access your account means your 
					files follow you everywhere."
          />
        </Grid>
        <Grid textAlign="center" item md={12} lg={6}>
          <Section2Item
            media={securityImg}
            header="Security you can trust"
            content="2-factor authentication and user-controlled encryption are just a couple of the security 
				features we allow to help secure your files."
          />
        </Grid>
        <Grid textAlign="center" item md={12} lg={6}>
          <Section2Item
            media={collaborationImg}
            header="Real-time collaboration"
            content="Securely share files and folders with friends, family and colleagues for live collaboration. 
				No email attachments required."
          />
        </Grid>
        <Grid textAlign="center" item md={12} lg={6}>
          <Section2Item
            media={anyFileIMG}
            header="Store any type of file"
            content="Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all 
				file types to be securely stored and shared."
          />
        </Grid>
      </CustomGrid>
    </Section2Style>
  );
};

export const Section2Style = styled.div`
	margin-top:4.5rem;
  background-color: hsl(218, 28%, 13%);
  padding: 0 3rem;
  z-index: 10;
`;

export default Section2;
