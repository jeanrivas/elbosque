import React from 'react';
import styled from 'styled-components';

const ValoresContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	height: 100vh;
`;

const TextSeccion = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Mision = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 70px;
	font-weight: 400;
	border-bottom: 5px solid #01bf71;
	color: #26a157;
`;

const TextP = styled.p`
	font-size: 28px;
	font-weight: 200;
`;

const ValoresSection = () => {
	return (
		<ValoresContainer>
			<ValoresSection>
				<p>
					“…El gran desafío está en renovar nuestros usos tecnológicos, apostar por la
					innovación, alimentando una nueva cultura, junto a las habilidades psíquicas
					como la adaptación al cambio, la resiliencia y transformación para el desarrollo
					en el nuevo mundo…”
				</p>
				<p>Oficina de comunicaciones y área comercial</p>
				<h1>VALORES</h1>
			</ValoresSection>
			<TextSeccion>
				<Mision>
					<Title>MISIÓN</Title>
					<TextP>
						Llevamos productos de calidad e información de alto valor. Capitalizando
						nuestros conocimientos nos encaminamos al desarrollo local. Sosteniendo la
						canasta básica familiar y siendo el aliado estratégico para el crecimiento de
						tu negocio.
					</TextP>
				</Mision>
				<Mision>
					<Title>VISIÓN</Title>
					<TextP>
						Ser el centro de desarrollo local que permita fortalecer y fomentar la cultura
						empresarial, el arte y la cultura, así como procurar estabilidad en la
						familias y empresas locales.
					</TextP>
				</Mision>
			</TextSeccion>
		</ValoresContainer>
	);
};

export default ValoresSection;
