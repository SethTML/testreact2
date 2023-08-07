import Soutside from './Images/soutside.png'
import Header from './Header.js';
import Hero from './Hero.js';
import About from './About.js';
import Skills from './Skills.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';
import Copyright from './Copyright.js';

function ScrollTo(query){
    let item = document.querySelector(query);
    item.scrollIntoView({behavior: 'smooth'})
  }
  
  function Reveal(){
    let reveals = document.querySelectorAll(".reveal");
  
    for(let i = 0 ; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 200;
  
      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  
  
  }

  window.addEventListener("scroll",Reveal);
  

function MainPortfolio() {
  return (
    <div className="App">
        <Header ScrollTo = {ScrollTo}/>
        <Hero ScrollTo = {ScrollTo}/>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Copyright />
    </div>
  );
}

export default MainPortfolio;
