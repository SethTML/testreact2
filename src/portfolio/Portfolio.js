import Project from './Project.js'
import ShopifyImage1 from './Images/ShopifyProjectImg.png'

function Portfolio() {
  return (
    <div className="PortfolioCover">
      <div className = 'Portfolio reveal'> 
        <span className = 'Crumb'>Portfolio</span>
        <span className = 'Head'>My Projects</span>
        <div className = 'Projects'>
          <Project
            name = "Pet Plus"
            desc = "Pet Plus is a pet store focused on providing high quality items to pets and pet owners."
            tools = {["Shopify"]}
            codelink = "https://youtube.com"
            viewlink = "https://slpetplus.myshopify.com/"  
            images = {[ShopifyImage1]}
            containscode = {false}
          />
          <Project
            name = "Pet Plus"
            desc = "Pet Plus is a pet store focused on providing high quality items to pets and pet owners."
            tools = {["Shopify"]}
            codelink = "https://youtube.com"
            viewlink = "https://slpetplus.myshopify.com/"  
            images = {[ShopifyImage1]}
            containscode = {false}
          />          
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
