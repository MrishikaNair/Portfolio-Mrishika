import '../styles/skills.css';
import Navbar from "./navbar";
import Footer from "./footer";
import * as React from 'react';
import Pinksemi from '../assets/port-pinksemi.png';
import Pgraph from '../assets/graphp.png';
import Girl from '../assets/girl_skills.png';
import Blacksemi from '../assets/port-blacksemi.png';
import Bgraph from '../assets/graphb.png';
import '../styles/navbar.css';

import styled from 'styled-components';
import { keyframes } from "styled-components";

import{Link} from "react-router-dom";
import { style } from '@mui/system';

const data=[
    "UI, UX Design",
    "UX Research",
    "Web Design",
    "Graphic Design",
    "Adobe Suit"

]
const data2=[
    "Full-stack development",
    "HTML, CSS",
    "Javascript, ReactJS",
    "MERN Stack",
    "Firebase, MySQL"

]
const Heading=styled.div`
        position: relative;
        margin-top:200px;
        margin-bottom:90px;
        margin-left:-300px;
        
        background: -webkit-linear-gradient(#F5A5A5, rgb(72, 44, 44));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 70px;
        font-family: 'Josefin Sans', sans-serif;
        
`;
const animation=keyframes`
    0%{opacity: 0;}
    100%{opacity: 1;}
`;
const Section=styled.div`
    height: 100vh;
    
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
`;
const Conatiner=styled.div`

    height: 40vh;
    scroll-snap-align: center;
    width:1000px;
    display: flex;
    justify-content: space-between;
`;

const Left=styled.div`
    flex=1;
    padding-top: 20px;
    width: 500px;
    position: relative;
    margin-left:-320px;
    
    
`;

const Right=styled.div`
    flex=1;
    width: 500px;
    position: relative;
    margin-left:40px;
`;
const List=styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 230px;
    width: 500px;
`;
const ListItem=styled.li`
    font-size: 60px;
    font-family: 'Arial';
    margin-top: 150px;
    margin-left:-100px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #EEB2AE;
    position: relative;
    rotate: -90deg;
   

`;


const ListItem1=styled.li`
    font-size: 60px;
    font-family: 'Arial';
    font-weight: bold;
    margin-top: 180px;
    margin-left: 300px;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #949494;
    position: relative;
    rotate: -90deg;
`;


function Skills(){
    return (
        <Section>
            <Navbar />
            
            <Conatiner>
                <Heading>Skills.</Heading>   
            </Conatiner>

            <Left><ListItem>DESIGNER</ListItem></Left>
            <Right><ListItem1>&lt;CODER&gt;</ListItem1></Right>
        <div>
        
        
        
        <p class="basicp" style={{ marginTop:-410,marginLeft:220}}>UI/UX Design</p>
        <p class="basicp" style={{ marginTop:-315, marginLeft:220}}>UX Research</p>
        <p class="basicp" style={{ marginTop:-230, marginLeft:220}}>Interaction Design</p>
        <p class="basicp" style={{ marginTop:-133, marginLeft:220}}>Graphic Design</p>
        <p class="basicp" style={{ marginTop:-40, marginLeft:220}}>Adobe Stack</p>
        
        
        <p class="basicb" style={{ marginTop:-280, marginLeft:1200}}>Full-stack development</p>
        <p class="basicb" style={{ marginTop:-190, marginLeft:1350}}>HTML, CSS</p>
        <p class="basicb" style={{ marginTop:-100, marginLeft:1400}}>MySQL</p>
        <p class="basicb" style={{ marginTop:-10, marginLeft:1250}}>Javascript, ReactJS</p>
        <p class="basicb" style={{ marginTop:80, marginLeft:1340}}>Java, Python</p>
        
        
        <div id="designer"><img  src={Pgraph} alt="graph"  style={{ marginLeft:0, marginTop:-470, align:'center', height: 520, width:600}} /> 
        </div>
        <div id="girl"><img  src={Girl} alt="girl" style={{ marginTop:-350,marginLeft:680,align:'center', height: 320}} />
        </div>
        
        <div id="coder"><img  src={Bgraph} alt="graph" style={{ marginTop:-420,marginLeft:1100,align:'center', height: 520, width:600}} />
        </div>
    </div>
    <Footer />
    </Section>  
    )
    
}
export default Skills;
