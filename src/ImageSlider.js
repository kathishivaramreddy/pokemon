import React from 'react';
import {Fade} from 'react-slideshow-image';
import './ImageSlider.css'

const fadeImages = (index) => {

        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
        // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.index}.png`,
        // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.props.index}.png`

}

const fadeProperties = {
    // duration:5000,
    // transitionDuration:500,
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
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
                </div>

            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${props.index}.png`} />
                </div>

            </div>
            <div className="each-fade">
                <div className="image-container">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.index}.png`} />
                </div>

            </div>
        </Fade>
    )
}