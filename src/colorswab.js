import React, {useState} from 'react';
import * as styles from "./colorswab.module.scss";


export const ColourSwab = ({hue}) => {
    let swabStyle = {
        background: `hsl(${hue}, 100%, 50%)`
    }
    return(
        <div className={styles.colorPicker} style={swabStyle}></div>
        
    );  
};

