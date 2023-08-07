import React , {useState,useEffect} from 'react';
import Soutside from './Images/sonwall.JPG';
import SethPortrait from './Images/SethPortriat.png';
import DarkWave from './Images/darkwaving.png'

function Hero(props) {
  const [currentWord, setCurrentWord] = useState('Front-end Developer');

  const words = ['Web Content Editor', 'Front-end Developer'];
  const typingSpeed = 200;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    let currentID = 0;
    let isDeleting = false;
    let currentLength = 0;

    const handleTyping = () => {
      const currentText = words[currentID];

      if (isDeleting) {
        setCurrentWord(currentText.substring(0, currentLength - 1));
        currentLength--;
      } else {
        setCurrentWord(currentText.substring(0, currentLength + 1));
        currentLength++;
      }

      if (isDeleting && currentLength === 0) {
        isDeleting = false;
        currentID = (currentID + 1) % words.length;
        setTimeout(handleTyping, pauseBetweenWords);
      } else if (!isDeleting && currentLength === currentText.length) {
        isDeleting = true;
        setTimeout(handleTyping, pauseBetweenWords);
      } else {
        const typingSpeedToUse = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(handleTyping, typingSpeedToUse);
      }
    };

    handleTyping();
  }, []);


  return (
      <div className = 'HeroCover'>
        <div className="Hero">
          <div className='HeroDesc'>
            <span className = 'HDIntro'>Hey I'm Seth <img className = "HDIntroWave" src = {DarkWave} height = "70px"></img></span>
            <span className = 'HDRole'>{currentWord}</span>
            <span className = 'HDLocation'>based in New Jersey, USA.</span>
            <div className = 'HDButtons'>
              <div onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'Button-Portfolio'>
                <button onClick={props.ScrollTo.bind(this,(".PortfolioCover"))} className = 'ButtonFont1'>View Portfolio</button>
              </div>
              <div onClick={props.ScrollTo.bind(this,(".ContactCover"))} className = 'Button-Contact'>
                <button onClick={props.ScrollTo.bind(this,(".ContactCover"))} className = 'ButtonFont2'>Contact Me</button>
              </div>
            </div>
          </div>
          <div className='HeroImg'>
            <img alt = "Seth LaMar - Professional Portrait" className = 'HeroImage' src = {SethPortrait} width = "300px"></img>
          </div>
        </div>
      </div>
  );
}

export default Hero;
