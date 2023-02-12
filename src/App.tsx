import { Fragment, useState } from "react";
import styled from "styled-components";
import { Home, Section1, Section2, Section3 } from "./pages";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Fragment>
      <StyledWrapper>
        <Navbar />
        <Home />
      </StyledWrapper>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </Fragment>
  );
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(217, 28%, 15%);
  max-width: 100rem;
  margin: 0 auto;
  /* padding: 4rem 3rem 0 3rem; */
`;

export const StyledFooter = styled.div`
  place-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100rem;
  margin: 0 auto;
  /* padding: 4rem 3rem 0 3rem; */
`;

export default App;
