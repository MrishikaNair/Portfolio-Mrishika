import '../styles/contact.css';

import '../styles/navbar.css';
import styled from 'styled-components';
import Navbar from "./navbar";
import Logo from '../assets/logo_mk.png';
import Hi from '../assets/hicontact.png';
import Insta from '../assets/insta.jpeg';
import Linkedin from '../assets/linkedin.jpeg';
import Mail from '../assets/mail.jpeg';
import email from '../assets/email.png';
import Footer from "./footer";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

import{Link} from "react-router-dom";
import { Container } from '@mui/system';

const Heading=styled.div`
        
        margin-top:210px;
        
        
        background: -webkit-linear-gradient(#F5A5A5, rgb(72, 44, 44));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 70px;
        font-family: 'Josefin Sans', sans-serif;
        
`;
const animating=styled.div`
        position: relative;
        margin-top:2500px;
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
    
    height: 145vh;
    scroll-snap-align: center;
    width:1400px;
    display: flex;
    justify-content: space-between;
`;

const Left=styled.div`
    padding-top: 20px;
    width: 700px;
    position: relative;
    margin-left:-150px;
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
    
    width: 700px;
    margin-left:800px;
    margin-top:-30px;
    height: 60vh;
`;
function Contact(){
    
    return(
        <Section>
            <Navbar/>
        <Container>
            <Left>
                <Heading>Get in touch.</Heading>
                <a href='https://www.instagram.com/mrish_nair/'><img  src={Insta} alt="insta logo" class="icon" style={{position:'absolute',marginTop:150 ,height: 70 }} /></a>
                <a href='https://www.linkedin.com/in/mrishika-nair-422913225/'><img  src={Linkedin} alt="linkedin logo" class="icon" style={{position:'absolute',marginLeft: 100,marginTop:150,height: 70 }} /></a>
                <a href="#Aemail"><img  src={Mail} alt="gmail logo" class="icon" style={{position:'absolute',marginLeft: 200,marginTop:150 ,height: 70 }} /></a>
        
            </Left>
            <Right>
                <Canvas>
                    <ambientLight intensity={0.4} />
                    <OrbitControls enableZoom={false}/>
                    <directionalLight position={[3,2,1]} />
                    <Sphere args={[1,100,200]} scale={2.9}>
                        <MeshDistortMaterial
                            color="#7C4D58"
                            attach="material"
                            distort={0.3}
                            speed={1.8}
                        />
                    </Sphere>
                    
                </Canvas>
                <img  src={Hi} alt="Hi" style={{position:'absolute',marginTop:-450,marginLeft:-50,float:'left' ,height: 450 }} />
            </Right>
        </Container>
        
        <img src={email} style={{marginTop:1030,float:'left' ,height: 1050 ,  position:'absolute'}}></img>
        <div className='Aemail' id='Aemail'>
        
        <form action="mailto:mrishnair@gmail.com" style={{alignItems:'center' }}>
            <input id="email" className="box" type="email" placeholder='email' style={{fontSize:20,marginTop:350,paddingLeft:20, height:40,position:'relative',  width:480 }}autoComplete="on" required />
              <br></br>  
            <input id="name" className="box" type="message" placeholder='subject' style={{fontSize:20, position:'relative',marginTop: 40,height:40,paddingLeft:20,  width:480}}autoComplete="on" required />
               <br></br>
                
            <input id="message" className="box" type="message" placeholder='Message' rows = "2" cols = "12" wrap="hard" style={{fontSize:20, marginTop: 40,paddingLeft:20,  height:160, width:480}}autoComplete="on" required />
            
                <br></br>
            
        </form>
            <div>
                <input className="sub-btn" type="submit" name="submit" value="Send" style={{marginTop:250, marginLeft:230}} />
            </div>
        </div>   
        
        
        <Footer />
        
        </Section>
    )
    
}
export default Contact;
//<img src={email} style={{marginTop:720,float:'left' ,height: 1050 ,  position:'absolute'}}></img>