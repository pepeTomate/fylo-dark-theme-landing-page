import { Flexbox } from "@/styles/Flexbox";
import { StyledButton } from "@/styles/StyledButton";
import React from "react";
import styled from "styled-components";
export interface EmailBoxInterface {}

const EmailBox: React.FC<EmailBoxInterface> = () => {
  return (
    <EmailBoxStyle>
      <h2>Get early access today </h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.{" "}
      </p>
      <Flexbox className="emailInput">
        <input placeholder="email@example.com"></input>
        <Flexbox className="emailButton"><StyledButton>Get Started For Free</StyledButton></Flexbox>
      </Flexbox>
    </EmailBoxStyle>
  );
};

export const EmailBoxStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 45rem;
  padding: 2rem;
  background-color: hsl(217, 28%, 15%);
  box-shadow: 0px 4px 8px 0px rgba(14, 14, 14, 0.459);
  z-index: 5;
  transform: translateY(50%);
  border-radius: 0.5rem;
  gap: 1.5rem;
  margin: 0 auto;

  & .emailInput {
    place-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      & .emailButton {
        margin: 0px;
        width: 100%
        align-items: center;

        button {
          max-width: 20rem;
        }
      }

      & input {
        max-width: 20rem;
        height: 3rem;
      }
    }
  }

  & .emailInput input {
	width: 100%;
	border-radius: 2rem;
	border: none;
	padding-left: 1.5rem;

  }

  & .emailButton {
	margin-left: 2rem;
	text-transform: none;
    font-weight: 700;
  }

  & .emailButton button {
	text-transform: none;
    font-weight: 700;
  }

  /* & h2, p {
	margin: 1rem 0;
  } */
`;

export default EmailBox;
