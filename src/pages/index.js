import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import NosotrosSeccion from '../components/Nosotros';
import {
	homeObjOne,
	homeObjTwo,
	homeObjThree,
	homeObjFour,
	homeId,
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import PuestosSeccion from '../components/Puestos';
import ValoresSection from '../components/Valores';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<NosotrosSeccion />
			<InfoSection {...homeObjOne} />
			<ValoresSection />
			<PuestosSeccion {...homeId} />
			<InfoSection {...homeObjTwo} />
			<Services />
			<InfoSection {...homeObjThree} />
			<InfoSection {...homeObjFour} />

			<Footer />
		</>
	);
};

export default Home;
