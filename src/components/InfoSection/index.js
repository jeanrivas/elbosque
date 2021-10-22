import React from 'react';
import { Button } from '../ButtonElement';
import {
	BtnWrap,
	Column1,
	Column2,
	Heading,
	Heading2,
	Img,
	ImgWrap,
	InfoContainer,
	InfoRow,
	InfoWrapper,
	Subtitle,
	Subtitle2,
	TextWrapper,
	TopLine,
} from './InfoElements';

const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	headLine,
	darkText,
	yellowText,
	lightText,
	description,
	headLine2,
	description2,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<Heading2 lightText={lightText}>{headLine2}</Heading2>
								<Subtitle2 yellowText={yellowText}>{description2}</Subtitle2>
								<BtnWrap>
									<Button
										to="home"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
										dark2={dark2 ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
