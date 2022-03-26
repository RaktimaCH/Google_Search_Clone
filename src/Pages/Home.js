import React from "react";
import AppIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import "./Home.css";

import Search from "./Search"





export default function Home(){
    
    return(
<div className="Home-app">
    <div className="header">
        <div className="header-left">
            <p>About</p>
            <p>Store</p>
        </div>
        <div className="header-right">
            <p>Gmail</p>
            <p>Images</p>
          <AppIcon/>
          <Avatar/>
        </div>
    </div>
    <div className="body-part">
        <img className="google-logo" src="http://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png" />
        
        <Search />
        

     
    </div>
    
</div>

    );
}