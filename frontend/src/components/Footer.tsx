import { useState } from "react";

const Footer = () => {

    const [play_or_pause, set_play_or_pause]= useState('pause-circle-fill.svg')

    const play =(e) =>{
        e.preventDefault();
        if(play_or_pause=='pause-circle-fill.svg')set_play_or_pause('play-circle-fill.svg')
            else if (play_or_pause == 'play-circle-fill.svg' ) set_play_or_pause('pause-circle-fill.svg')
    }
    
    return ( 
        <footer>

            <div className="playButtons">
                <button className="button"> <img src="skip-back-fill.svg" alt="" className="img-btn img-icon-btn" /></button>
                <button className="button" onClick={play} style={{display:"flex"}} ><img src={play_or_pause} alt="pause-circle-fill image" className="img-btn img-icon-btn" /></button>
                <button className="button"><img src="skip-forward-fill.svg" className="img-btn img-icon-btn" alt="" /></button>
            </div>
        </footer>
     );
}
 
export default Footer;