import Soutside from './Images/soutside.png';
import SStage from './Images/SethStage.JPG';

function About() {
  return (
    <div className="AboutCover">
      <div className = 'About reveal'>
        <div className = 'AboutTitle'>
          <span className = 'Crumb'>About Me</span>
          <span className = 'Head'>Learn More</span>
        </div>
        <div className = 'AboutContent'>
          <div className = 'AboutImage'>
            <img className = 'AboutImg' src = {SStage}></img>
          </div>
          <div className = 'AboutBody'>
            <span className = 'ABIntro'>Hello, I'm <span className = 'ABISpecial'>Seth LaMar</span></span>
            <div className = 'ABText'>A passionate front-end developer and content editor with a keen eye for design and a love for creating enjoyable user experiences. With a strong background in web development and a creative mindset, I bring ideas to life through code and captivating content. In my free time I enjoy going to the gym and challenging myself with competitive programming.
            </div>
          </div>
        </div>
        <div className = 'AboutInfo'>
          
        </div>
      </div>
    </div>
  );
}

export default About;
