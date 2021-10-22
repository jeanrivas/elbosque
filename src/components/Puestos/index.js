/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { PuestosContainer } from './PuestosElements';
import Puesto from '../../images/puestos.png';

const initialState = [
	{
		id: 1,
		name: '1',
		number: '973 409 401',
	},
	{
		id: 2,
		name: '2',
		number: '902 036 297',
	},
	{
		id: 3,
		name: '3',
		number: '944 775 133',
	},
	{
		id: 4,
		name: '4',
		number: '934 934 657',
	},
	{
		id: 5,
		name: '5',
		number: '923 211 344',
	},
	{
		id: 6,
		name: '6',
		number: '900 663 460',
	},
	{
		id: 7,
		name: '7',
		number: '993 442 321',
	},
	{
		id: 8,
		name: '8',
		number: '967 300 258',
	},
	{
		id: 9,
		name: '9',
		number: '972 732 765',
	},
	{
		id: 10,
		name: '10',
		number: '983 336 113',
	},
	{
		id: 11,
		name: '11',
		number: '934 934 657',
	},
	{
		id: 12,
		name: '12',
		number: '998 803 300',
	},
	{
		id: 13,
		name: '13',
		number: '(01) 374- 5469',
	},
	{
		id: 14,
		name: '15',
		number: '979 503 584',
	},
	{
		id: 15,
		name: '16',
		number: '(01) 764- 3602',
	},
	{
		id: 16,
		name: '17',
		number: '951 736 311',
	},
	{
		id: 17,
		name: '19',
		number: '992 629 145',
	},
	{
		id: 18,
		name: '20-21',
		number: '971 673 602',
	},
	{
		id: 19,
		name: '22',
		number: '995 161 218',
	},
	{
		id: 20,
		name: '23',
		number: '(01) 432- 5766',
	},
	{
		id: 21,
		name: '24',
		number: '933 367 604',
	},
	{
		id: 22,
		name: '26',
		number: '951 110 564',
	},
	{
		id: 23,
		name: '31',
		number: '(01) 458 8385',
	},
	{
		id: 24,
		name: '34',
		number: '934 934 657',
	},
	{
		id: 25,
		name: '36',
		number: '920 538 351',
	},
	{
		id: 26,
		name: '37',
		number: '945 963 170',
	},
	{
		id: 27,
		name: '38',
		number: '950 015 591',
	},
	{
		id: 28,
		name: '40',
		number: '940 694 134',
	},
	{
		id: 29,
		name: '41',
		number: '(01) 281 9934',
	},
	{
		id: 30,
		name: '42',
		number: '946 537 861',
	},
	{
		id: 31,
		name: '44',
		number: '943 797 875',
	},
	{
		id: 32,
		name: '45',
		number: '975 565 857',
	},
	{
		id: 33,
		name: '46',
		number: '976 056 837',
	},
	{
		id: 34,
		name: '47',
		number: '932 456 106',
	},
	{
		id: 35,
		name: '48',
		number: '991 842 315',
	},
	{
		id: 36,
		name: '50',
		number: '993 172 660',
	},
	{
		id: 37,
		name: '51',
		number: '986 047 395',
	},
	{
		id: 38,
		name: '52',
		number: '965 062 177',
	},
	{
		id: 39,
		name: '53',
		number: '937 690 980',
	},
	{
		id: 40,
		name: '56',
		number: '937 690 980',
	},
	{
		id: 41,
		name: '57',
		number: '991 339 296',
	},
	{
		id: 42,
		name: '58',
		number: '947 662 606',
	},
	{
		id: 43,
		name: '59',
		number: '962 719 559',
	},
	{
		id: 44,
		name: '61',
		number: '935 768 764',
	},
	{
		id: 45,
		name: '62',
		number: '996 033 113',
	},
	{
		id: 46,
		name: '63',
		number: '960 537 878',
	},
	{
		id: 46,
		name: '65',
		number: '938 535 661',
	},
	{
		id: 47,
		name: '67',
		number: '987 240 644',
	},
	{
		id: 48,
		name: '68',
		number: '978 168 782',
	},
	{
		id: 49,
		name: '69',
		number: '(01) 376 2392',
	},
	{
		id: 50,
		name: '70',
		number: '934 934 657',
	},
	{
		id: 51,
		name: '71',
		number: '964 909 375',
	},
	{
		id: 52,
		name: '72',
		number: '989 215 571',
	},
	{
		id: 53,
		name: '74',
		number: '955 823 597',
	},
	{
		id: 54,
		name: '76',
		number: '982 170 715',
	},
	{
		id: 55,
		name: '78',
		number: '900 735 749',
	},
];

const ListPuestos = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 200px 200px;
	border: 1px solid #000000;
`;

const TitlePuestos = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: 200px 200px;
	grid-template-rows: 40px;
	color: white;
	background: #ffbf00;
	border-radius: 10px;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const ListPuestoItem = styled.div`
	padding: 10px;
`;

const PuestoTexto = styled.p`
	font-size: 20px;
`;

const Astyle = styled.a`
	text-decoration: none;
`;

const PuestosContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;
`;

const PuestosSeccion = () => {
	const [puestos, setPuestos] = useState(initialState);

	return (
		<PuestosContainer id="puestos">
			<PuestosContent>
				<h1>Listado de Puestos</h1>
				<TitlePuestos>
					<h2>Puesto:</h2>
					<h2>Numero:</h2>
				</TitlePuestos>
				{puestos.map((puesto) => (
					<ListPuestos>
						<ListPuestoItem>
							<PuestoTexto>{puesto.name}</PuestoTexto>
						</ListPuestoItem>
						<ListPuestoItem>
							<PuestoTexto>
								<Astyle href={`https://api.whatsapp.com/send?phone=${puesto.number}`}>
									{puesto.number}
								</Astyle>
							</PuestoTexto>
						</ListPuestoItem>
					</ListPuestos>
				))}
			</PuestosContent>
		</PuestosContainer>
	);
};

export default PuestosSeccion;
