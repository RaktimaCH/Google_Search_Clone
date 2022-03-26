import React from "react"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import "./Search.css"
import {Button} from "@material-ui/core"
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { useStateValue } from "../StateProvider";
import {action} from "../reducer"


export default function Search({hidebuttons}){
 
    const [input, setInput] = useState('')
    const [{}, dispatch] = useStateValue()

    const navigate = useNavigate();
    const search = (e)=>{
  e.preventDefault();
  dispatch({
      type: action.SET_SEARCH_TERM,
      term: input
    })
    navigate('/search')
  
    }

    

    return(
<form className="search-box">
    <div className="search-container">
     <SearchIcon className="searchBar"/>
    <input value={input} onChange={(e)=> setInput(e.target.value)} className="search-input" placeholder="search" />
     <MicIcon/>
    </div>
    {!hidebuttons ? (

    <div className="search-button">
    
    <Button type="submit" variant="outline" onClick={search} >Google Search</Button>
  
    <Button variant="outline" >I am feeling lucky</Button>

</div>
  
    ):(
             <div className="search-button">
    
    <Button type="submit" variant="outline" onClick={search} style={{display:"none"}} >Google Search</Button>
  
           </div>

    
    )}
     
</form>

    );
}