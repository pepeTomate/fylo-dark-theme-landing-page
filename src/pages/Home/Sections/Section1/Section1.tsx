import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import intro_image from "../../../../assets/illustration-intro.png"
import { Flexbox } from '@/styles/Flexbox';
import { StyledButton } from '@/styles/StyledButton';
import img_desktop from "@/assets/bg-curvy-desktop.svg"
import img_mobile from "@/assets/bg-curvy-mobile.svg"
import zIndex from '@mui/material/styles/zIndex';
export interface Section1Interface {}

const Section1 : React.FC<Section1Interface> = () => {
	return <Section1Style>
				<Flexbox sx={{placeContent:"center"}} className='Intro-foto'>
					<img src={intro_image} alt="intro image"/>
				</Flexbox>
				<Flexbox className="Sec1" sx={{flexDirection: "column"}}>
					<Typography variant='h4' sx={{fontSize: '2.3rem'}} >
						All your files in one secure location, accessible anywhere.	
					</Typography>
					<Typography variant='h6' sx={{paddingX: "3rem", fontSize: "1.1rem", color: "#ffffffba", zIndex: 2}}>
						Fylo stores all your most important files in one secure location. Access them wherever 
						you need, share and collaborate with friends family, and co-workers.
					</Typography>
					<StyledButton sx={{textDecoration: "none", cursor: "pointer", zIndex: 2}}>
						<a href='#'>Get Started</a>
					</StyledButton>
				</Flexbox>
				<Flexbox className='Curvy-bg1'><img src={img_desktop}/></Flexbox>
				<Flexbox className='Curvy-bg2'><img src={img_mobile}/></Flexbox>
			</Section1Style>;
};

export const Section1Style = styled.div`
	background-color:hsl(217, 28%, 15%);
	display: flex;
	flex-direction:column;
	/* gap:2rem;  */
	text-align: center;
	align-items: center;
	place-content: center;
	width: 100%;

	@media (max-width: 600px) {
		margin-bottom: 10rem;
		& .Curvy-bg1 {
		display: none;
		}
	}
	
	@media (min-width: 600px) {		
		& .Curvy-bg2 {
		display: none;
		}
	}

	& .Intro-foto {
		max-width: 650px;

		img {
			max-width: 100%;
			object-fit: contain;
		}

		@media (max-width: 600px) {
			max-width:20rem;
			margin-top:2rem;
		}
	}


	& .Curvy-bg1 {
		width: 100%;
		z-index: 0;
		

		& img {
			width: 100%;
			object-fit: cover;
		}
	}

	& .Curvy-bg2 {
		width: 100%;
		z-index: 0;
		
		& img {
			object-fit: cover;
			width: 100%;
		}
	}

	& .Sec1 {
		flex-direction: column;
		text-align: center;
		place-content: center;
		align-items: center;
		gap: 2rem;
		padding: 0 25vw;
		transform: translateY(50%);
		z-index:5;
	}

	@media (min-width: 1200px) {
		h6 {
			padding: 0 3rem;
		}
	}
	@media (max-width: 1200px) {
		h6 {
			padding: 0 1rem;
		}
	}
`
	
;

export default Section1;
