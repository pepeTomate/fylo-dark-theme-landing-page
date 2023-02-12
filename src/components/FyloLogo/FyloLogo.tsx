import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg'
export interface FyloLogoInterface {}

const FyloLogo : React.FC<FyloLogoInterface> = () => {
	return (
			<FyloLogoStyle>
				<img src={logo}/>
			</FyloLogoStyle>
	);
};

export const FyloLogoStyle = styled.div`
	
`;

export default FyloLogo;
