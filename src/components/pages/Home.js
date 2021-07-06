import React from 'react';
import Navbar from '../Navbar';
import './home.css';
import {AnimatePresence, motion} from 'framer-motion';
import wc from '../../WC.png';
import vido from '../../assets/7.mp4';

function Home() {
  return (
  <AnimatePresence exitBeforeEnter>
  <motion.div
  initial={{scaleY:0}}
  animate={{scaleY:1}}
  exit={{scaleY:0}}
  transition={{duration:0.5}}>
   <div class="home">
     <div class="vido">
       <div class="navb">
       <Navbar/>
       </div>
       <video src={vido} autoPlay loop muted/>
       <div class="glass">
            <div class="landing">
                <h1>ROTARACT CLUB</h1>
                <h5>OF </h5>
                <h6> PARUL UNIVERISTY</h6>
                <img src={wc}alt= "" class="logo"></img>
            </div>
        </div>          
     </div>
     <div class="vbo">
        <div class="navn">
          <Navbar/>
        </div>
        <video src={vido} class="play"autoPlay loop muted/>
       <div class="gla">
            <div class="landi">
                <h20>ROTARACT CLUB</h20>
                <h21>OF </h21>
                <h26> PARUL UNIVERISTY</h26>
                <img src={wc}alt= "" class="lo"></img>
            </div>
        </div>          
     </div>
      
      
   </div> 
  </motion.div>    
  </AnimatePresence> 
  )
}

export default Home;

