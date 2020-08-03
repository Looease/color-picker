import React, {useState} from 'react';
import colorPicker from './colorPicker';
import slider, { Slider } from './slider.js'
import { ColourSwab } from './colorswab';
import * as styles from "./app.module.scss";



// const MyInput = () => {
//     const [theValue, setTheValue] = useState(ColourSwab.styles.colorPicker);
    
//     return <input value={theValue} onChange={event => setTheValue(event.target.value)}/>;
// }

export const App = () => {

    const [selectedHue, setHue] = useState(0)

    const [selectedSaturation, setSaturation] = useState (100);

    const [selectedBrightness, setBrightness] = useState (50);

    return (
        <main>
    
            <h1>Color Picker</h1>
            <colorPicker/>
           
            <ColourSwab hue={selectedHue}/>

            <div className={styles.row}>
            <Slider name="Hue" selectedValue={selectedHue} setHue={setHue}/>
            <Slider name="Saturation"/>  
            <Slider name="Brightness"/>

            </div>
                
        
        </main>


        



    );
};