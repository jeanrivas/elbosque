import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavbarConteiner,
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
       <>
       <Nav scrollNav={ scrollNav }>
           <NavbarConteiner>
               <NavLogo to='/' onClick={toggleHome}>ElBosque</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to='nosotros'
                       smooth={true} duration={500} spy={true} exact='true' offset={-80}
                       >Nosotros</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='informacion'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Informacion</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='servicios'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Servicios</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to='equipo'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Equipo</NavLinks>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                       <NavBtnLink to='/registro'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >Registro</NavBtnLink>
                </NavBtn>
           </NavbarConteiner>
       </Nav>
       </>
    )
}

export default Navbar;
