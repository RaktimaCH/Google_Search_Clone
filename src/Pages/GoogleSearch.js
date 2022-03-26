import React from "react"
import Search from "./Search";
import SearchResult from "./SearchResult"
import "./GoogleSearch.css";
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
 import NoteIcon from "@material-ui/icons/Note"
 import ImageIcon from "@material-ui/icons/Image";
 import LocalOfferIcon from '@material-ui/icons/LocalOffer';
 import LocationOnIcon from '@material-ui/icons/LocationOn';
 import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function GoogleSearch(){

    return(
<div className="page">
  
    <Link to="/">
<img className="googleLogo" src="http://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png" />
    </Link>
   
    <div className="searchInput">
   <Search hidebuttons />
 </div>
 
 <div className="search-icon-tool">
      
        <div className="left-icon-tool">
      <SearchIcon className="srcc"/>
         <Link to="/" className="srcc">  All</Link> 
        </div>
        <div className="left-icon-tool">
        <NoteIcon className="srcc"/>
         <Link to="/" className="srcc"> News</Link> 
        </div>
        <div className="left-icon-tool">
         <ImageIcon style={{color:"gray"}} />
         <Link to="/" className="srcc"> image</Link> 
        </div>
        <div className="left-icon-tool">
         <LocalOfferIcon className="srcc"/>
         <Link to="/" className="srcc">  Shopping</Link> 
        </div>
        <div className="left-icon-tool">
         <LocationOnIcon className="srcc"/>
         <Link to="/" className="srcc">  Maps</Link> 
        </div>
        <div className="left-icon-tool">
         < MoreVertIcon className="srcc"/>
         <Link to="/" className="srcc">  More</Link> 
        </div>
        <div className="right">
         <div className="right-icon-tool">
         <Link to="/" className="srcc">  Settings</Link> 
         </div>
         <div className="right-icon-tool">
         <Link to="/" className="srcc"> Tools</Link> 
         </div>

        </div>
        
 </div>
 

<div className="Result-google-search">
<hr/>
  <SearchResult />
  

</div>
</div>

    );
}