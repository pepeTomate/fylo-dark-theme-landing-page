import { BlockQuote } from "@/components/BlockQuote";
import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

import icon1 from "@/assets/profile-1.jpg";
import icon2 from "@/assets/profile-2.jpg";
import icon3 from "@/assets/profile-3.jpg";

export interface Section4Interface {}

const Section4: React.FC<Section4Interface> = () => {
  return (
    <Section4Style>
      <Grid container>
        <Grid item lg={4} md={6} sm={12}>
          <BlockQuote
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
			become a well-oiled collaboration machine."
            media={icon1}
            name="Satish Patel"
            title="Founder &amp; CEO, Huddle"
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <BlockQuote
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
			become a well-oiled collaboration machine."
            media={icon2}
            name="Bruce McKenzie"
            title="Founder &amp; CEO, Huddle"
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12}>
          <BlockQuote
            content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
			become a well-oiled collaboration machine."
            media={icon3}
            name="Iva Boyd"
            title="Founder &amp; CEO, Huddle"
          />
        </Grid>
      </Grid>
    </Section4Style>
  );
};

export const Section4Style = styled.div`
  background-color: hsl(218, 28%, 13%);
  display: flex;
  flex-direction: row;
  padding: 0 3rem 0 3rem;
  margin-top: 9rem;
`;

export default Section4;
