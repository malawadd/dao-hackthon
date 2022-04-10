import * as React from "react";
import faq_backg from '../images/faqbackg.svg';
import note_tape from "../images/note_tape.svg"
import { useState, useRef } from "react";

import FaqPointer from "./FaqPointer";


const Faq = () => {
  const faqs = [
    // ['What is WaffleHacks?', 'WaffleHacks is a hackathon that is held annually in the fall of 2019. It is a 24-hour hackathon where students from all over the world come together to create and build something amazing. We are a community of students, hackers, and engineers who are passionate about building the future of technology.'],
    ['What is a dao?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>DAO (Decentralized Autonomous Organization) as an organization represented by rules encoded as a transparent computer program, controlled by the organization members, and not influenced by a central government. As the rules are embedded into the code, no managers are needed, thus removing any bureaucracy or hierarchy hurdles.</span>],
    ['Who can join?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>Farmers, workers, and everyone in the related supplychain</span>],
    ['what is needed to join ', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>A virtification of the job or ownership of the farm/ equipments </span>],
    ['How will the voting work?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>once the application have been approved, a token will be airdropped into the walled and that token is used for voting  </span>],
    ['how are the committe members chosen?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>chosen by the dao members, according to thier votes.</span>],
    ['I want to be sponsor this dao', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}> We are happy to know you're excited about this , stay tuned!</span>],
    ['I have more questions!', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>there will be many technical workshops that will be held soon</span>],
    ['my questions are urgent', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}><ul><li> please feel free to email us at <a href='mailto:operations@EzraDao.org' style={{color: 'rgb(255, 219, 184)'}}>operations@EzraDao.org</a></li><br /><li>hey its not real email </li></ul></span>
    ],
  ];
  const left = useRef(Array(faqs.length).fill(false));
  const mained = useRef(Array(faqs.length).fill(false));

  const [showSingle, setShow] = useState(false);

  function stopProp(e){
    if ('stopPropagation' in e) e.stopPropagation();
    e.cancelBubble = true;
  }

  return (
    <div id='faq' onClick={() => setShow(false)}>
        <img id='faq-bkg' src={faq_backg} alt="FAQ background"  style={{width: '100%', height: '100%'}} />

        <div id='faq-pointers' style={{position: 'absolute', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', top: 0, width: '100%', padding: '6vw 16vw 0 19vw', boxSizing: 'border-box'}}>
            
            <div id='faq-tape' style={{position: 'relative', marginBottom: '2vw'}}>
              <img
                  src={note_tape} alt="FAQ tape"
                  style={{width: "15vw", margin: '0 35vw'}}
              />
              <span style={{
                  position: 'absolute',
                  left: "50%",
                  top: '45%',
                  transform: "translateX(-50%) translateY(-50%)",
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '2.5vw'
                  }}>
                  FAQs
              </span>
            </div>

            {faqs.map((faq, index) => {
              if (showSingle !== false && showSingle !== index) left.current[index] = true;
              if (showSingle === index) mained.current[index] = true;
              return (
                <FaqPointer key={index} ind={index} wasLeft={left.current[index]} mained={mained.current[index]} single={showSingle} question={faq[0]} desc={faq[1]} trigger={(e) => {stopProp(e); setShow(index);}}/>
              )
            })}

        </div>
    </div>
  )
}

export default Faq