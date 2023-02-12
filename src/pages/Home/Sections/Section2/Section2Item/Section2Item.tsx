import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
export interface Section2ItemInterface {
	media: string,
	header: string,
	content: string
}

const Section2Item : React.FC<Section2ItemInterface> = ({media, content, header}) => {
	return <Section2ItemStyle>
				<img src={media} />
				<Typography variant='h5' sx={{margin: "0.8rem 0rem"}} >
					{header}
				</Typography>
				<Typography variant='body1'>
					{content}
				</Typography>
			</Section2ItemStyle>;
};

export const Section2ItemStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0rem 8vw;
	margin: 4.8rem 0rem;
	max-height: 15rem;

	& img {
		max-width: 65px;
		max-height: 65px;
	}
`;

export default Section2Item;
