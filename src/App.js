import './App.css';
import Home from "./Pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import GoogleSearch from './Pages/GoogleSearch';

function App() {
  return (
 <BrowserRouter>
 
<div className="App">
  <Routes>
    <Route path="/" element={ <Home /> }/>
    <Route path="/search" element={ <GoogleSearch /> }/>
  </Routes>
   
    </div>
 </BrowserRouter>
  );
}

export default App;
