import { Navbar } from '@/components/Navbar';
import { Box, Container } from '@mui/material';
import styled from 'styled-components';
import React from 'react';
import { Section1, Section2, Section3, Section4} from '@/pages'
import { Flexbox } from '@/styles/Flexbox';
import { EmailBox } from '@/components/EmailBox';
import { Footer } from '@/components/Footer';


export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
		<StyledHome>
			<StyledSections>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<EmailBox/>
			</StyledSections>
		</StyledHome>
	);
};

export const StyledHome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	align-items: center;
	place-content: center;
	margin: 0 auto;
`

export const StyledSections = styled.div`
	/* display: flex;
	flex-direction: column;
	gap: 3rem;
	align-items: center;
	place-content: center; */
	background-color:  hsl(218, 28%, 13%);
	max-width: 100rem;
`

export default Home;
