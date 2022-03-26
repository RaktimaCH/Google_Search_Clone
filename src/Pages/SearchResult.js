import React from "react"
import UseGoogleSearch from "../useGoogleSearch";
import "./SearchResult.css"
import { useStateValue } from "../StateProvider";

export default function SearchResult(){
    const [{term}] = useStateValue()
    const {data} = UseGoogleSearch(term)
    console.log(data)
   
 return(
<div className="all-result">
  
  {term &&
  <div>

    <div className="head">


      <span>About {data?.searchInformation.formattedTotalResults} results  ({data?.searchInformation.formattedSearchTime} seconds) for {term}</span>

    </div>
    {data?.items.map(item =>(


 <div className="image-result-box">
     <a href={item.link} target="_blank">
     <img className="image-result" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} />
    </a>

     <a href= {item.link} target="_blank">
    {item.displayLink} :
         <h3>{item.title}</h3>

     </a>
        <p> {item.snippet} </p>
         
  <hr style={{width:"100vw"}}/>
 </div>
    ))}
    </div>
}
</div>

 );


}