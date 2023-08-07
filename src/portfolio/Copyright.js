import GITHUBgo from './Images/GITHUBgo.png';
import openlink from './Images/openlink.png';
import GithubWhite from './Images/whitegithub.png';
import LinkedIn from './Images/linkedin-icon-18-256.png';


function Copyright(props) {
  function openTab(link){
    window.open(link,'_blank');
  }

  return (
    <div className = 'CopyrightCover'>
      <div className = 'Copyright'>
        <span className = 'CopyFont'>Copyright © 2023. All rights are reserved</span>
        <div className = 'SocialIcons'>
          <img tabIndex={0} onKeyDown={(event) => {
            if (event.key == "Enter"){
              openTab("https://github.com/sethtml");
            }
          }} onClick={openTab.bind(null, "https://github.com/sethtml")} src = {GithubWhite} height = "80%" className = 'GitCon'></img>
          
          <img tabIndex={0} onKeyDown={(event) => {
            if (event.key == "Enter"){
              openTab("https://www.linkedin.com/in/seth-lamar-16b3b8256/");
            }
          }} onClick={openTab.bind(null, "https://www.linkedin.com/in/seth-lamar-16b3b8256/")} src = {LinkedIn} height = "80%" className = 'LinkCon'></img>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
