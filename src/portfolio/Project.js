import GITHUBgo from './Images/GITHUBgo.png';
import openlink from './Images/openlink.png';

function Project(props) {
  let items = props.tools.map(function(item, index){
    return (<span className = 'ProjectTool' key = {index}>{item}</span>);
  });

  function openTab(link){
    window.open(link,'_blank');
  }

  return (
    <div className = 'Project'>
      <div className = 'ProjectImage'>
        <img src = {props.images[0]} alt = "" className = 'ProjectImg'>
        </img>
      </div>
      <div className = 'ProjectInfo'>
        <span className = 'ProjectName'>{props.name}</span>
        <span className = 'ProjectDesc'>{props.desc}</span>
        <div className = 'ProjectToolbox'>{items}</div>
        <div className = 'ProjectSource'>
          {
          props.containscode &&
          <div className = 'SourceCode'>
            <button onClick={openTab.bind(null,props.codelink)} className = 'SourceFont'>View Code
              <img src = {GITHUBgo} className = 'Sourcego' height = "20px"></img>
            </button>
          </div>
          }
          <div className = 'SourceView' link = {props.viewlink}>
            <button onClick={openTab.bind(null,props.viewlink)} className = 'SourceFont'>Live Demo
            <img src = {openlink} className = 'Sourcego' height = "20px"></img>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
