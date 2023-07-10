
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

//images
import Logo from '../assets/logo_mk.png';
//

const Section=styled.div`
    
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




const Footer= () => {
    return (
    
        <div class="footer" style={{marginTop:600, position:'relative',padding:10 }}>
            <Link to="/"><button class="footbut">Home</button></Link>
            <Link to="/skills"><button class="footbut">Skills</button></Link>
            <Link to="/portfolio"><button class="footbut">Portfolio</button></Link>
            <Link to="/contact"><button class="footbut">Contact</button></Link>
        </div>
                
    )
}
export default Footer;