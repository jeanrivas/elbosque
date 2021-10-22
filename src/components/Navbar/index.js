import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarConteiner,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavBtn,
	NavBtnLink,
	NavBtnLinkG,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarConteiner>
					<NavLogo to="/" onClick={toggleHome}>
						ElBosque
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavBtnLinkG
								to="nosotros"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Nosotros
							</NavBtnLinkG>
						</NavItem>
						<NavItem>
							<NavBtnLinkG
								to="puestos"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Puestos
							</NavBtnLinkG>
						</NavItem>
						<NavItem>
							<NavBtnLinkG
								to="informacion"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Valores
							</NavBtnLinkG>
						</NavItem>
						<NavItem>
							<NavBtnLinkG
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								disabled="true"
							>
								Contacto
							</NavBtnLinkG>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink
							to="/register"
							smooth={true}
							duration={500}
							spy={true}
							exact="true"
							offset={-80}
						>
							Registro
						</NavBtnLink>
					</NavBtn>
				</NavbarConteiner>
			</Nav>
		</>
	);
};

export default Navbar;
