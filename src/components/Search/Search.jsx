import React, {useState} from "react"


const Search = ({setQuery})=>{
    const [value,setValue] = useState()
    return(
        <div className={`search-container`}>
                <input type="text" onChange={e=>setValue(e.target.value)}
                 value={value} placeholder={"search the city name"}/>
                <button onClick={()=>setQuery(value)}>Check Weather</button>
        </div>
    )
}
export default Search;