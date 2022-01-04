
import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import { Detalledepeli } from './pages/Detalledepeli';
import { Ladinpage } from './pages/Ladinpage';
import Style from './app.module.css';


function App() {
  
  return (
 <Router>
   <header>
     
      <Link to="/" ><h1 className={Style.titulo} >peliculas Don kuthulo </h1></Link>
       
      <hr /> 
   </header>
   <main>
     <Switch>
       <Route ecaxt path="/Movie/:movieId"><Detalledepeli/></Route>
       <Route ecaxt path="/"><Ladinpage/></Route>

     </Switch>


   </main>
 </Router>
);
}


export default App;
