import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItem,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLinks,
} from './FooterElements';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinksItem>
							<FooterLinkTitle> Acerca de nosotros </FooterLinkTitle>
							<FooterLink to="/registro">Como funciona</FooterLink>
							<FooterLink to="/registro">Testimonios</FooterLink>
							<FooterLink to="/registro">Carreras</FooterLink>
							<FooterLink to="/registro">Inversionistas</FooterLink>
							<FooterLink to="/registro">Terminos y condiciones</FooterLink>
						</FooterLinksItem>
						<FooterLinksItem>
							<FooterLinkTitle> Acerca de nosotros </FooterLinkTitle>
							<FooterLink to="/registro">Como funciona</FooterLink>
							<FooterLink to="/registro">Testimonios</FooterLink>
							<FooterLink to="/registro">Carreras</FooterLink>
							<FooterLink to="/registro">Inversionistas</FooterLink>
							<FooterLink to="/registro">Terminos y condiciones</FooterLink>
						</FooterLinksItem>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">Elbosque</SocialLogo>
						<WebsiteRights>
							ElBosque R {new Date().getFullYear()}
							All right reserverd.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLinks href="/" target="_blank" arial-label="Facebook">
								<FaFacebook />
							</SocialIconLinks>
							<SocialIconLinks href="/" target="_blank" arial-label="Instagram">
								<FaInstagram />
							</SocialIconLinks>
							<SocialIconLinks href="/" target="_blank" arial-label="Youtube">
								<FaYoutube />
							</SocialIconLinks>
							<SocialIconLinks href="/" target="_blank" arial-label="Twitter">
								<FaTwitter />
							</SocialIconLinks>
							<SocialIconLinks href="/" target="_blank" arial-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLinks>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
