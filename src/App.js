import React from 'react'
import styled from 'styled-components'
import Hero from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import './App.css'

const Container = styled.div`
height: 100vh;
background-color: #fff;
`;

function App() {

  return (
    <Container>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
    </Container>
      
    
  )
}

export default App


/*
import './App.css';
import styled from 'styled-components';
import './styles/navbar.css';
import './styles/about.css';
import Back from './assets/home-black.png';
import Girl from './assets/home-abs.png';
import Logo from './assets/logomk.jpeg';

import Hex from './assets/hexagons.png';
import Me from './assets/Myself.jpeg';

import{Link} from "react-router-dom";

const Container = styled.div`
        height: 100vh;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        overflow-y: auto;
        scrollbar-width: none;
        scroll-snap-align: center;
`;
function App() {
  return (
    <Container>
      <div class="nav">
      <img  src={Logo} alt="Logo" style={{marginLeft: 50,marginTop:10,float:'left' ,height: 50 }} />
      <section id="navbar">
          
      
            
            <br></br>
          
            <Link to="/"><button class="navbut">ABOUT</button></Link>
            <Link to="/portfolio"><button class="navbut">PORTFOLIO</button></Link>
            <Link to="/skills"><button class="navbut">SKILLS</button></Link>
            <Link to="/contact"><button class="navbut">CONTACT</button></Link>

        
        </section>
      <div className="text-imgl">Hello,</div>
      <div className="text-imgb">I am Mrishika Nair</div>
      <img  src={Me} alt="My photo" class="center" style={{ position:'absolute',marginTop:800,marginLeft:750,align:'center',width: 700, height: 630}} />
      <img  src={Girl} alt="Background" style={{marginLeft: 90,marginTop:80, position: 'absolute',float:'left' ,height: 500 }} />
      <img  src={Back} alt="Background" style={{ width: '100%', height: 750 }} />
      </div>
      <a href="#about"><button className="hearme" transition= {3}>Hear me</button></a>
      
      <div class="cont">
        <div className="ab" id="about"><b>About.</b></div>
        <p className="text">I am Mrishika, a sophomore at Indraprastha Institute of Information Technology pursuing Computer Science
                            and Design. I have always tried to dabble my skills
                            starting from sports to music, so I am a Jack of all
                            trades and wish to be a master of one.</p>
    </div>
    
        <div className="mb"><b>My beliefs.</b></div>
        <img  src={Hex} alt="hexagons" class="center" style={{ marginTop:200,align:'center',width: 900, height: 400, opacity: 0.8}} />
        <p className="one">1</p>
        <div class="hide">A good composition 
serves both an artistic 
and utilitarian purpose.</div>
        <p className="two">2</p>
        <div class="hide">while(!(succeed ==try));</div>
        <p className="three">3</p>
        <div class="hide">Strong preference for 
easy to use, intuitive UX/UI.</div>
        <p className="four">4</p>
        <div class="hide">Design isn’t a solitary 
pursuit, appretiate 
different viewpoints</div>
        <p className="five">5</p>
        <div class="hide">Develop experiences to
make people’s life simple</div>
      
      
        <div class="footer">
            <Link to="/"><button class="footbut">Home</button></Link>
            <Link to="/skills"><button class="footbut">Skills</button></Link>
            <Link to="/portfolio"><button class="footbut">Portfolio</button></Link>
            <Link to="/contact"><button class="footbut">Contact</button></Link>
        </div>
    </Container>
  );
}

export default App;
*/
