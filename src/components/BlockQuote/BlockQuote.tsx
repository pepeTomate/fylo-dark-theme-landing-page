import { Flexbox } from "@/styles/Flexbox";
import React from "react";
import styled from "styled-components";

export interface BlockQuoteInterface {
	content: string,
	media: string,
	name: string,
	title: string,
}

const BlockQuote: React.FC<BlockQuoteInterface> = ({media, title, name, content}) => {
  return (
    <BlockQuoteStyle>
		<div className="Content"><p>{content}</p></div>
		<Flexbox className="QuoteUser">
			<Flexbox className="Avatar">
				<img src={media}/>
			</Flexbox>
			<Flexbox className="Avatar-info">
				<h6>{title}</h6>
				<p>{name}</p>
			</Flexbox>
		</Flexbox>
    </BlockQuoteStyle>
  );
};

export const BlockQuoteStyle = styled.div`
	display: flex;
	flex-direction: column;
	background-color:hsl(219, 30%, 18%);
	min-height: 5rem;
	max-width: 30rem;
	padding: 1.5rem;
	margin: 2rem 1rem;
	border-radius: 5px;
	

	& .Avatar {
		align-items:center;
	}


	& .QuoteContent, .Avatar-info {
		flex-direction: column;
		align-items:flex-start;
		place-content:center;
		/* gap: 1rem; */
	}

	& .QuoteUser {
		flex-direction: row;
		gap: 1rem
	}

	& .Avatar > img {
		width:3rem;
		height:3rem;
		border-radius: 1.5rem;
	}

	& .Content  p {
		margin: 1rem 0;
	}
`;

export default BlockQuote;
