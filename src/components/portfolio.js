import '../styles/portfolio.css';
import styled from 'styled-components';
import Navbar from "./navbar";
import Footer from "./footer";

import sow from '../assets/soweasy.jpeg';
import sow_logo from '../assets/Soweasylogo.png';
import port_back from '../assets/think.jpeg';

import toggle from '../assets/toggle.png';
import toggle_logo from '../assets/Togglelogo.png';

import * as THREE from 'three';
import logos from '../assets/logos.jpeg';
import illu from '../assets/illustrations.jpeg';
import journal from '../assets/Journal.jpeg';

import {Link} from "react-router-dom";

const Section=styled.div`
    height: 350vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
`;
const Conatiner=styled.div`
    height: 105vh;
    scroll-snap-align: center;
    width:1500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 200px;
`;
const Conatiner2=styled.div`

    height: 100vh;
    scroll-snap-align: center;
    width:1500px;
    display: flex;
    justify-content: space-between;
`;
const Left=styled.div`
    padding-top: 20px;
    width: 750px;
    position: relative;
    margin-left:-120px;
`;
const Left1=styled.div`
    padding-top: 20px;
    width: 750px;
    margin-left: 0px;
    position: relative;
    margin-left:-120px;
    margin-top: 200px;
`;
const Right=styled.div`
    padding-top: 240px;
    width: 750px;
    margin-left:290px;
    margin-top:-30px;
`;

const Title=styled.div`
    color: #ffffff;
    font-size: 60px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: lighter;
    padding-top: 220px;
`;
const Textgit=styled.div`
    position: absolute;
    color: #ffffff;
    font-size: 60px;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 220px;
    margin-left: 400px;
`;
const Heading=styled.div`
        position: relative;
        margin-top:100px;
        margin-left:400px;
        
        background: -webkit-linear-gradient(#F5A5A5, rgb(72, 44, 44));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 70px;
        font-family: 'Josefin Sans', sans-serif;
        
`;

const space=styled.div`
    height:100vh;
    margin-top: -500px;
`;

const Button=styled.div`
    
    text-align: center;
    margin-top: 100px;
    margin-left: 350px;
    padding: 8px;
    height:30px;
    font-family: 'Inter', sans-serif;
    const Button=styled.button;
    font-weight: 500;
    color: #F5A5A5;
    transparent:0.5;
    font-size: 20px;
    
    width:220px;
    border-radius: 4px;
    border-style:none;
    background: #000000;
    border-color:#F5A5A5; 
    border: 1px solid #F5A5A5;

    cursor: pointer;
    &:hover,
    &:focus {
        color: #ffffff;
        background: radial-gradient(ellipse at top, #F5A5A5, transparent),
            radial-gradient(ellipse at bottom, #DF5151, #ec7575);
    }
    &:active {
        color: #ffffff;
        background: radial-gradient(ellipse at top, #F5A5A5, transparent),
            radial-gradient(ellipse at bottom, #DF5151, #ec7575);
    }
    
`;

function Portfolio(){
    
    
    return(
        <Section>
            <Navbar/>
        <Conatiner>
                <Left>
                    <img  src={port_back} style={{ position: 'relative',marginTop:150,height: 700 }} /> 
                </Left>
                <Right>
                        
                        <Heading>Works.</Heading>
                        
                        <a href='https://github.com/MrishikaNair?tab=repositories/' style={{  textDecoration: 'none'  }}><Button >Browse my Github</Button></a>
                </Right>
                
            
        </Conatiner>
        <section className="works">

            <a href="https://xd.adobe.com/view/7ea69af6-c4be-4f68-bc3f-1ed449a041ba-2bf5/"><div className="card2">
            
            <img  src={toggle} alt="toggle24" className="image" style={{marginLeft: 950,marginTop:0, position: 'absolute',float:'left' ,height: 440 , width:700}} />
            <p class="big" style={{position:'absolute', marginLeft: 540,marginTop:200, }}>UI</p>
        
            <div className="details2">    
            <img src={toggle_logo} alt="logo" style={{marginLeft: 20,marginTop:50, position: 'absolute' ,height: 120}}/>
            <div className="centerp2">
                UI design for a gardening companion app that would guide the user throughout 
                the gardening process and help them maintain the garden without any worries or hassles.
            </div></div>
            </div>
            </a>
           
            <a href="https://xd.adobe.com/view/e3e291b4-c8da-4d87-a53f-b83ffeda03e0-b6b1/" >
                <div className="card">
                    <img  src={sow} alt="sow" className="imagee" style={{marginLeft: 140,marginTop:230, position: 'absolute',float:'left' ,height: 450, width:640 }} />
            <p class="big" style={{position:'absolute', marginLeft: 810,marginTop:280, }}>DESIGN</p>
            <div className="details">
                <img src={sow_logo} alt="logo" style={{marginLeft: 20,marginTop:50, position: 'absolute' ,height: 85}}/>
                <div className="centerp">
                UI design for a gardening companion app that would guide the user throughout 
                the gardening process and help them maintain the garden without any worries or hassles.
            </div></div>
            </div>
            </a>

            <a href="https://www.canva.com/design/DAFIEhl9X3I/VRW8cAWnfLhCspiLfGkfFw/view?utm_content=DAFIEhl9X3I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img  src={logos} alt="logos" className="image" style={{marginLeft: 140,marginTop:950, position: 'absolute',float:'left' ,height: 380, width:350  }} /></a>
            <a href="https://www.canva.com/design/DAFIEls1OkI/6tr4WZ-cqfJjpliyhocICw/view?utm_content=DAFIEls1OkI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img  src={illu} alt="illustrations" className="image" style={{marginLeft: 500,marginTop:950, position: 'absolute',float:'left' ,height: 380 , width:350}} /></a>
            <p class="big2" style={{position:'absolute', marginLeft: 180,marginTop:750}}>VISUAL</p>
            <p class="big2" style={{position:'absolute', marginLeft: 860,marginTop:1000}}>DESIGN</p>
            
            
            <a href="https://www.canva.com/design/DAEtb9JhePI/rPsJJFTrhY3Kq6Mct0F_Zw/view?utm_content=DAEtb9JhePI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><div className="card3">
            <img  src={journal} alt="Journal" className="image" style={{marginLeft: 1050,marginTop:1130, position: 'absolute',float:'left' ,height: 470, width:670 }} />
            <p class="big3" style={{position:'absolute', marginLeft: 110,marginTop:1200}}>JOURNAL</p>
            <div className="details3"> 
            <div className="centerp3">
                A chronicle of my work flow, learnings and projects during the course of one semester.
            </div>
            </div></div>
            </a>
            
        </section>
        <Footer />
        </Section>
        
        
    )
    
}
export default Portfolio;