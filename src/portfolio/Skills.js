import Soutside from './Images/soutside.png';
import HTMLgo from './Images/HTMLgo.png';
import CSSgo from './Images/CSSgo.png';
import JSgo from './Images/JSgo.png';
import REACTgo from './Images/REACTgo.png';
import WPgo from './Images/WPgo.png';
import SHOPgo from './Images/SHOPgo.png';

function About() {
  return (
    <div className="SkillsCover">
      <div className = 'Skills reveal'>
        <span className = 'Crumb'>Skills</span>
        <span className = 'Head'>My Tech Stack</span>
        <div className = 'SkillGrid'>
          <div className = 'SkillItem'>
            <img alt = "HTML Logo" className = 'SkillImage' src = {HTMLgo}></img>
            <span className = 'SkillFont'>HTML</span>
            <span className = 'SkillDesc'>I have a strong understanding of HTML, enabling me to create well-structured web pages.</span>
          </div>
          <div className = 'SkillItem'>
            <img alt = "CSS Logo" className = 'SkillImage' src = {CSSgo}></img>
            <span className = 'SkillFont'>CSS</span>
            <span className = 'SkillDesc'>I have a strong understanding of CSS, allowing me to create visually appealing and responsive web designs.</span>
          </div>
          <div className = 'SkillItem'>
            <img alt = "Java Script Logo" className = 'SkillImage' src = {JSgo}></img>
            <span className = 'SkillFont'>JavaScript</span>
            <span className = 'SkillDesc'>I have a strong understanding of JavaScript that allows me to create dynamic and interactive web applications.</span>
          </div>
          <div className = 'SkillItem'>
            <img alt = "React Logo" className = 'SkillImage' src = {REACTgo}></img>
            <span className = 'SkillFont'>React</span>
            <span className = 'SkillDesc'>I have a strong understanding of React that allows me to build robust and scalable web applications that deliver an interactive user experience.</span>
          </div>
          <div className = 'SkillItem'>
            <img alt = "Wordpress Logo" className = 'SkillImage' src = {WPgo}></img>
            <span className = 'SkillFont'>Wordpress</span>
            <span className = 'SkillDesc'>I have a strong understanding of WordPress allowing me to create dynamic and customizable websites.</span>
          </div>
          <div className = 'SkillItem'>
            <img alt = "Shopify Logo" className = 'SkillImage' src = {SHOPgo}></img>
            <span className = 'SkillFont'>Shopify</span>
            <span className = 'SkillDesc'>I have a strong understanding of Shopify enabling me to create stunning and functional online stores.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
