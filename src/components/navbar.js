
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

//images
import Logo from '../assets/logo_mk.png';
//

const Section=styled.div`
    position: fixed;
    z-index:999;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    
`;

const Container=styled.div`
    width: 1800px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #0D0D0D99;
    opacity: 0.5,
`;
const Links=styled.div`
    
`;
const List=styled.ul`
    display: flex;
    align-items:right;  
    gap: 120px;
    list-style: none;
    
    padding-left:900px;
`;
const ListItem=styled.li`
    display: flex;
    align-items: right;   
    gap: 110px;
    color: #fff;
    font-size: 20px;
    font-family: 'Inter', sans-serif;

    cursor: pointer;
    &:hover,
    &:focus {
        color: #ec7575;
    }
    &:active {
        color: #F5A5A5
    }
    
    transition: all 0.1s ease-in-out;
    
`;
const Icons=styled.img`
    
`;




const Navbar= () => {
    return (
        <Section>
            <Container>
               
                <Links>
                <a href="/"><img  src={Logo} alt="Logo" 
                style={{marginLeft: 50,marginTop:10,float:'left' ,height: 50 }} /></a>
                <List>
                <Link to="/About" smooth={true} duration={1000} style={{ textDecoration: 'none' }}><ListItem>ABOUT</ListItem></Link>
                <Link to='/Portfolio' style={{ textDecoration: 'none' }}><ListItem>PORTFOLIO</ListItem></Link>
                <Link to='/Skills' style={{ textDecoration: 'none' }}><ListItem>SKILLS</ListItem></Link>
                <Link to='/Contact' style={{ textDecoration: 'none' }}><ListItem>CONTACT</ListItem></Link>
                </List>
                </Links>
                
            </Container>
        </Section>
    )
}
export default Navbar;