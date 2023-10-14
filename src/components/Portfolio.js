import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./Portfolio.css"
import { useState,useEffect } from "react";
function Portfolio(){
  const[loc,setloc]=useState(window.location.hash);
   useEffect(()=>{
     const handlepath=()=>{
       setloc(window.location.hash);
     };
     window.addEventListener('scroll',handlepath)
     return  ()=>{window.removeEventListener('scroll',handlepath)};}
    ,[]);

  
    
  
   return(
    <BrowserRouter>
    <div>
    <div class="nav bg-warning position-sticky top-0">
    <span class="ms-4 mt-0 h2"><b class="title">Portfolio</b></span>
    <Link to="#home" class="nav-link ms-auto me-5 text-dark" id={loc==='#home'?'active-link':'p1'}>Home</Link>
    <Link to="#about" class="nav-link me-5 text-dark" id={loc==='#about'?'active-link':'p1'}>About</Link>
    <Link to="#contact" class="nav-link me-5 text-dark" id={loc==='#contact'?'active-link':'p1'}>Contact</Link>
    </div>
    <div id='home'>
          <h2>Home</h2>
          <p class="h1 ms-5">Hi Welcome To My Portfolio,</p>
          <br/>
          <p class="content ms-5"> Hello, I'm <span class="text-warning">Thavanesh R</span>,<br/><br/> a passionate developer and lifelong learner. I thrive on
        turning ideas into reality through the power of code.<br/>
         Currently based in Tamilnadu, India,
         I enjoy working on a variety of projects that challenge me to
        expand my skill set and creativity.</p>
        <p class="content ms-5">Feel free to explore this page to know more about me</p> 
        </div>
     

    <div id='about'>
    <h2>About</h2>
    <p class="content ms-5">
      I'm Thavanesh R, a passionate and dedicated college student pursuing B.tech at VIT Vellore. <br/>
      Here's a little glimpse into my world:
      <br/>
      <br/>
     <b>Academic Background//:</b>
    <br/>
     I'm currently in my 3<sup>rd</sup> year of college, and 
     I absolutely love diving into the world of Computer Science. 
     My academic journey has been filled with exciting challenges, 
     stimulating courses, and amazing opportunities for growth.
      <br/><br/><br/>
     <b>Skills//:</b>
     <br/>
     <ul>
      <li>Java</li>
      <li>Python</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React JS</li>
     </ul>
     <br/>
     <b>Future Goals//:</b>
    <br/>
     Looking ahead, I'm excited about the possibilities that lie beyond college.
      I aspire to become Developer, combining my passion for coding with a commitment
      to making a positive impact in the world.
    </p>
  
      
    </div>
    <div id='contact'>
      <h2>Contact</h2>
        <p class="content ms-5">
        Feel free to contact me!<br/><br/>
          You can reach out to me via email at 
          <a href="mailto:your.email@example.com"> Mail</a>.<br/> 
            <br/>
            Phone : +91 9334567899
          </p>
   </div>
    </div>
    </BrowserRouter>
      );
    
}
export default Portfolio;