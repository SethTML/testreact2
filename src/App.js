import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Water from './Water.js';
import Ice from './Ice.js';
import Portfolio from './portfolio/mainportfolio.js';
import Porsche from './porsche/mainporsche.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" exact element  = {<Portfolio />}> </Route>
        <Route path = "/water" element  = {<Water />}> </Route>
        <Route path = "/ice" element  = {<Ice />}> </Route>
        <Route path = "/porsche" element = {<Porsche />}/>



      </Routes>
    </Router>
  );
}

export default App;
