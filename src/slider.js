import React from 'react';
import * as styles from "./slider.module.scss";


export const Slider = ({name, selectedValue, setHue}) =>{
    const updateSlider = (event) => {
        const newPosition = event.target.value;
        setHue (newPosition);
    }  


    return(
        <div>
    <label>{name}
     <input onChange={updateSlider} type="range" min="0" max="360" value={selectedValue}></input>
     </label>
        </div>
     
     )
}

