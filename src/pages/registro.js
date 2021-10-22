import React from 'react';
import styled from 'styled-components';
import Registro from '../images/register.png';

const RegisterContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	height: 100vh;
	color: white;
	background-color: #66cc00;
`;

const ImageBg = styled.img`
	width: 100%;
	height: 100%;
`;

const WebConstruccion = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 60px;
`;

const Ps = styled.p`
	font-size: 30px;
`;
const registroPagina = () => {
	return (
		<RegisterContainer>
			<ImageBg src={Registro} />
			<WebConstruccion>
				<Title>Página en Construcción</Title>
				<Ps>947206368</Ps>
				<Ps>comunicaciones@elbosque.com</Ps>
				<Ps>/CentrodeAbastoslElBosque</Ps>
			</WebConstruccion>
		</RegisterContainer>
	);
};

export default registroPagina;
