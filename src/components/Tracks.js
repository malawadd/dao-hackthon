import * as React from "react";
import waffles_img from '../images/waffles.svg';
import sustainability_img from '../images/sustainability.svg';
import entertainment_img from '../images/entertainment.png';
import pointer_sign from "../images/pointer_sign.svg";
import stethoscope from "../images/stethoscope.png";
import connections from "../images/connections.png";
import { useRef } from "react";

import StickyNote from "./StickyNote";


const Tracks = () => {
  return (
    <center id='tracks'>
        <div id='tracks-box' style={{paddingTop: '8rem', paddingBottom: '3rem'}}>
        <div style={{position: 'absolute', top: '2rem', left: '-2rem'}}>
            <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
            <span style={{color: 'white', position: 'absolute', top: '45%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem'}}>Benefits</span>
        </div>
        <StickyNote img={waffles_img} name="Income sustainability" desc="helps producers set minimum prices, which help protect the dao farmers and workers against erratic market prices. If the market price for a commodity drops, the minimum price ensures the farmers and workers still earn enough to cover the basic costs of living." />
        <StickyNote img={entertainment_img} name="Community development" desc="The extra money earned from the Dao Premium is deposited into a seperated dao treasury managed collectively by dao members. The community votes on how to spend that money and can either take it as a wage bonus or invest it into community improvements" />
        <StickyNote img={stethoscope} name="Safe working conditions" desc="All dao farmers and workers benefit from regulated work hours and a policy prohibiting discrimination, child labor, and slave labor" />
        <StickyNote img={connections} name="Environmental sustainability" desc="Fair trade standards promote environmentally friendly farming practices" />
        </div>
    </center>
  )
}

export default Tracks