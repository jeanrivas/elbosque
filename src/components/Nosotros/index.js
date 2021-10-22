import React from 'react';
import Main from '../../images/main.png';
import {
	NosotrosContainer,
	NosotrosBg,
	NosotrosContent,
	NosotrosH1,
	NosotrosP,
	ImageBg,
} from './NosotrosElements';

const NosotrosSeccion = () => {
	return (
		<>
			<NosotrosContainer>
				<NosotrosBg>
					<ImageBg src={Main} />
				</NosotrosBg>
				<NosotrosContent>
					<NosotrosH1>MERCADO EL BOSQUE ASÍ SOMOS</NosotrosH1>
					<NosotrosP>
						La familia del Mercado El Bosque está conformada por empresarios con 38 años
						brindándote la mejor calidad de productos y servicios dirigidos a tu familia y
						tu negocio. A diario alimentamos a nuestra comunidad. Porque esforzamos por
						brindarte una grata experiencia en nuestro espacio, nuestro nuevo santuario:
						El Bosque.
					</NosotrosP>
				</NosotrosContent>
			</NosotrosContainer>
		</>
	);
};

export default NosotrosSeccion;
