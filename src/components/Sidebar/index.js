import React from 'react';
import { 
        SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SidebarBtnWrap,
        SidebarRoute,
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="nosotros" onClick={toggle}>
                        Nosotros
                    </SidebarLink>
                    <SidebarLink to="informacion" onClick={toggle}>
                        Informacion
                    </SidebarLink>
                    <SidebarLink to="servicios" onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SidebarLink to="equipo" onClick={toggle}>
                        Equipo
                    </SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/registro">Registro</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
