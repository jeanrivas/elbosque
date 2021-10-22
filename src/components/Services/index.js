import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id="servicios">
			<ServicesH1> VALORES COMPLEMENTARIOS</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1}></ServicesIcon>
					<ServicesH2>EMPATÍA</ServicesH2>
					<ServicesP>
						Entendemos la importancia de la atención al cliente. Ellos son lo más
						importante.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2}></ServicesIcon>
					<ServicesH2>AMOR</ServicesH2>
					<ServicesP> Es lo que motiva nuestras acciones.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3}></ServicesIcon>
					<ServicesH2>COOPERACIÓN </ServicesH2>
					<ServicesP>
						Necesitamos la colaboración de todos para el logro de nuestros objetivos.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3}></ServicesIcon>
					<ServicesH2>MUTUALISMO </ServicesH2>
					<ServicesP>
						Es el beneficio para quienes participan. Este valor promueve el sentido de
						justicia.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3}></ServicesIcon>
					<ServicesH2>ALEGRÍA </ServicesH2>
					<ServicesP>
						Es la manifestación del bienestar. Si nos sentimos bien, estamos alegres.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
