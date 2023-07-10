import '../styles/about.css';
import styled from 'styled-components';
import Navbar from "./navbar";
import Footer from "./footer";
import Hex from '../assets/hexagons.png';
import Hoverme from '../assets/hoverme.png';

import '../styles/navbar.css';
import Me from "../assets/Myself.png";
import { Tilt } from 'react-tilt'
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere, Torus } from "@react-three/drei";

const Section=styled.div`
    height: 170vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #000000;
`;

const Conatiner=styled.div`

    height: 70vh;
    scroll-snap-align: center;
    width:1500px;
    display: flex;
    justify-content: space-between;
    margin-bottom : 200px;
`;

const Conatiner2=styled.div`

    height: 85vh;
    scroll-snap-align: center;
    width:1500px;
    display: flex;
    justify-content: space-between;
`;

const Left=styled.div`
    
    width: 750px;
    margin-left: 0px;
    position: relative;
    margin-left:-120px;
    
`;
const Right=styled.div`
    margin-top:-80px;
   
`;
const Heading=styled.div`
        position: relative;
        margin-top:100px;
        margin-left:90px;
        
        background: -webkit-linear-gradient(#F5A5A5, rgb(72, 44, 44));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 70px;
        font-family: 'Josefin Sans', sans-serif;
        
`;
const Text=styled.div`
        position: relative;
        margin-top:80px;
        margin-left:90px;
        font-size: 20px;
        color: #949494;
        font-family: 'Inter', sans-serif;
        text-align:justify;
        line-height: 1.4; 
`;


function About() {
    return (
        <Section>
                <Navbar />
        <Conatiner>
                <Left>
                        <Heading>About.</Heading>
                        <Text><p>Hey there! I'm Mrishika, a IIITD Computer Science and Design undergraduate. I'm a Jack of all trades and a master of one (well, soon to be!). When I'm not tinkering with technology, you'll find me exploring new places, trying new foods, or binge-watching Bollywood movies. Life is all about balance, and I believe in having fun while constantly learning and growing. Let's connect and make something awesome together!</p></Text>
                        </Left>
                <Right>
                        <img  src={Me} alt="Me" style={{ position: 'relative',marginTop:100,height: 650 }} />
                        
                </Right>
        </Conatiner>
        <Conatiner>
                <Left>
                        <Heading>My beliefs.</Heading>
                </Left>
                <Right>
                
                <img  src={Hoverme} alt="Hover que" class="center" style={{ marginLeft:750,marginTop:300,align:'center',width: 200, height: 200}} />
                <img  src={Hex} alt="hexagons" class="center" style={{ marginTop:-100,align:'center',width: 1000, height: 430}} />
                
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

                        
                </Right>
        </Conatiner>
        
        </Section>
        
    )
}
export default About;
