import React from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import { Link } from 'react-router-dom';
import Logopin from '../assets/logopin.png';
import Back_black from "../assets/home-black.png";
import Girl from "../assets/home-abs.png";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
//<img  src={Girl} alt="Background" style={{marginLeft: 90,marginTop:80, position: 'absolute',float:'left' ,height: 500 }} />
//<img  src={Back} alt="Background" style={{ width: '100%', height: 750 }} />
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
    width:1500px;
    display: flex;
    justify-content: space-between;
`;

const Left=styled.div`
    padding-top: 20px;
    width: 750px;
    margin-left: 0px;
    position: relative;
    margin-left:-120px;
`;
const Right=styled.div`
    padding-top: 240px;
   
`;

const Title=styled.div`
    color: #ffffff;
    font-size: 60px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: lighter;
    padding-top: 220px;
`;
const Title1=styled.div`
    color: #ffffff;
    font-size: 60px;
    font-family: 'Josefin Sans', sans-serif;
    padding-top: 10px;
    padding-bottom: 40px;
    
`;

const Button=styled.div`
    
    text-align: center;
    
    padding: 8px;
    height:30px;
    font-family: 'Inter', sans-serif;
    const Button=styled.button;
    font-weight: 500;
    color: #F5A5A5;
    font-size: 20px;
    
    width:120px;
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
const Image=styled.img`
    
    object-fit: contain;
    position: absolute;
    
    bottom:0;
    margin:auto;
`;


const Home= () => {
    return (
        <Section>
            <Navbar />
                <Link to='/'><img  src={Logopin} alt="Background" style={{marginLeft:-1660,  position: 'fixed',height: 100 }} /></Link>
                        
                <Conatiner>
                    <Left>

                        <Canvas>
                            <ambientLight intensity={0.4} />
                            <OrbitControls enableZoom={false}/>
                            <directionalLight position={[3,2,1]} />
                            <Sphere args={[1,100,200]} scale={2.2}>
                                <MeshDistortMaterial
                                    color="#7C4D58"
                                    attach="material"
                                    distort={0.5}
                                    speed={1.8}
                                />
                            </Sphere>
                            
                        </Canvas>
                        <img  src={Girl} alt="Background" style={{marginLeft:250, marginTop:-800, position: 'absolute',height: 650 }} />
                        

                        
                    </Left>
                    <Right>
                        <Title>Hello,</Title>
                        <Title1>I am Mrishika Nair</Title1>
                        <Link to="/About" smooth={true} duration={1000} style={{ textDecoration: 'none' }}><Button>Hear me</Button></Link>
                        
                    </Right>
                
                </Conatiner>
           
        </Section>
    )
}
export default Home;