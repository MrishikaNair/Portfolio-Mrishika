import '../styles/skills.css';
import Navbar from "./navbar";
import Footer from "./footer";
import * as React from 'react';
import Pinksemi from '../assets/port-pinksemi.png';
import Pgraph from '../assets/graphp.png';
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

    height: 100vh;
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
    margin-left:-400px;
    margin-top: 200px;
`;

const Right=styled.div`
    flex=1;
    width: 500px;
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
    margin-top: 250px;
    margin-left: -150px;
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
    margin-top: 670px;
    margin-left: 550px;
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
                <Left>
                    
                    <ListItem>DESIGNER</ListItem>
                    <a href="#designer"><img  src={Pinksemi} alt="graph" class="centerp" style={{ marginTop:-170, marginLeft:460,align:'center', height: 550, width:300}} /></a>
                </Left>

                <Right>
                
                    <ListItem1>&lt;CODER&gt;</ListItem1>
                    <a href="#coder"><img  src={Blacksemi} alt="graph" class="centerb" style={{ marginTop:-440,marginRight:460,align:'center', height: 550, width:300}} /></a>
                </Right>
            </Conatiner>
            
    
        <div>
        
        <p class="basicp" style={{ marginTop:363, marginLeft:180}}>90%</p>
        <p class="basicp" style={{ marginTop:363, marginLeft:720}}>UI/UX Design</p>
        <p class="basicp" style={{ marginTop:453, marginLeft:180}}>90%</p>
        <p class="basicp" style={{ marginTop:453, marginLeft:720}}>UX Research</p>
        <p class="basicp" style={{ marginTop:543, marginLeft:180}}>60%</p>
        <p class="basicp" style={{ marginTop:543, marginLeft:720}}>Interaction Design</p>
        <p class="basicp" style={{ marginTop:633, marginLeft:180}}>90%</p>
        <p class="basicp" style={{ marginTop:633, marginLeft:720}}>Graphic Design</p>
        <p class="basicp" style={{ marginTop:723, marginLeft:180}}>70%</p>
        <p class="basicp" style={{ marginTop:723, marginLeft:720}}>Adobe Stack</p>
        
        
        <p class="basicb" style={{ marginTop:1190, marginLeft:1010}}>60%</p>
        <p class="basicb" style={{ marginTop:1190, marginLeft:250}}>Full-stack development</p>
        <p class="basicb" style={{ marginTop:1280, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1280, marginLeft:397}}>HTML, CSS</p>
        <p class="basicb" style={{ marginTop:1370, marginLeft:1010}}>70%</p>
        <p class="basicb" style={{ marginTop:1370, marginLeft:300}}>Javascript, ReactJS</p>
        <p class="basicb" style={{ marginTop:1460, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1460, marginLeft:450}}>MySQL</p>
        <p class="basicb" style={{ marginTop:1550, marginLeft:1010}}>80%</p>
        <p class="basicb" style={{ marginTop:1550, marginLeft:380}}>Java, Python</p>
        
        <div id="designer"><img  src={Pgraph} alt="graph"  style={{ marginTop:300,marginLeft:0,align:'center', height: 520}} /> 
        </div>
        
        <div id="coder"><img  src={Bgraph} alt="graph" style={{ marginTop:300,marginLeft:570,align:'center', height: 520}} />
        </div>
    </div>
    <Footer />
    </Section>  
    )
    
}
export default Skills;