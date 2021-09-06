import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { 
    NosotrosContainer,
    NosotrosBg,
    VideoBg, 
    NosotrosContent, 
    NosotrosH1, 
    NosotrosP, 
    NosotrosBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
} from './NosotrosElements';

const NosotrosSeccion = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <NosotrosContainer>
                <NosotrosBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </NosotrosBg>
                <NosotrosContent>
                    <NosotrosH1>Bienvenidos </NosotrosH1>
                    <NosotrosP>
                    Bienvenidos Bienvenidos Bienvenidos Bienvenidos Bienvenidos
                    Bienvenidos Bienvenidos Bienvenidos Bienvenidos Bienvenidos
                    Bienvenidos Bienvenidos
                    </NosotrosP>
                    <NosotrosBtnWrapper>
                        <Button to="/registro"
                         onMouseEnter={onHover} 
                         onMouseLeave={onHover}
                         primary='true'
                         dark='true'
                         >
                            Get started {hover ? <ArrowForward />: <ArrowRight/>}
                        </Button>
                    </NosotrosBtnWrapper>
                </NosotrosContent>
            </NosotrosContainer>
        </>
    );
};

export default NosotrosSeccion;
