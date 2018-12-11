import React from 'react';
import {Fade} from 'react-slideshow-image';
import './ImageSlider.css'


const fadeProperties = {
    autoplay:false,
    infinite:false,
    indicators:true,
    arrows:false
}

export const ImageSlider = (props) => {



    return (
        <Fade {...fadeProperties}>
            <div className="each-fade">
                <div className="image-container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} alt={props.index}/>
                </div>

            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.index}.png`} alt={props.index}/>
                </div>

            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.index}.png`} alt={props.index}/>
                </div>

            </div>
        </Fade>
    )
}