import React, {useState} from 'react';

function Header(props) {

  const [isDown,setDown] = useState(false);

  const handleDown = function(){
    setDown(!isDown);

    if (isDown){
      document.querySelector(".BurgerSlider").classList.remove("SliderAnim");
      document.querySelector(".BurgerSlider").classList.remove("BurgerBorder");
    } else{
      document.querySelector(".BurgerSlider").classList.add("SliderAnim");
      document.querySelector(".BurgerSlider").classList.add("BurgerBorder");
    }

  }

  function Reveal(){
    let reveal = document.querySelector(".AboutCover");
    let Header = document.querySelector(".Header");
  
    let windowheight = window.innerHeight;
    let revealtop = reveal.getBoundingClientRect().top;
    let revealpoint = 100;
  
    if (revealtop < windowheight - revealpoint){
      Header.classList.add('HeaderShadow');
    }
    else{
      Header.classList.remove('HeaderShadow');
    }
  }

  window.addEventListener("scroll",Reveal);

  return (
    <div className="Header">
        <div className = 'HeaderContent'>
          <div className = 'HeaderLogoBox'>
            <button onClick={props.ScrollTo.bind(this,(".HeroCover"))} className = 'HeaderLogo'>sldev</button>
          </div>
          <div className = 'HeaderGroup'>
            <button onClick={props.ScrollTo.bind(this,(".AboutCover"))} className = 'HGroupItem'>About</button>
            <button onClick={props.ScrollTo.bind(this,(".SkillsCover"))} className = 'HGroupItem'>Skills</button>
            <button onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'HGroupItem'>Portfolio</button>
            <button  onClick={props.ScrollTo.bind(this,(".ContactCover"))}className = 'HGroupItem'>Contact</button>
          </div>
          <button onClick = {handleDown} className = 'HeaderBurger'></button>
        </div>
        <div className = 'BurgerSlider'>
          <div className = 'BurgerGroup'>
            <button onClick={props.ScrollTo.bind(this,(".AboutCover"))} className = 'HGroupItem'>About</button>
            <button onClick={props.ScrollTo.bind(this,(".SkillsCover"))} className = 'HGroupItem'>Skills</button>
            <button onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'HGroupItem'>Portfolio</button>
            <button onClick={props.ScrollTo.bind(this,(".ContactCover"))}className = 'HGroupItem'>Contact</button>
          </div>
        </div>
    </div>
  );

  
}

export default Header;
