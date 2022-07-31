import React from "react";
import '../css/newfile.scss'
import Data from './mockdata.json'
import '../css/search.css'
import { useState } from "react";
import Search from "../SearchImplementation/SearchFunction";
import details from '../../../src/components/SearchImplementation/data/initialDetails'

const Home =() =>{
    // const link =() =>{
    //     props.push("/")
    // }
    const [query, setQuery] = useState("");
    const change =() =>{
      
        console.log(query);
    }
   
   
    return(<div>
       {/* <Search details={details} />   */}   
        <form >
        <input type="search" placeholder="Search Colleges" onChange={event => {setQuery(event.target.value); change()}} />
        </form>
        {
            Data.filter(post => {
              if (query === '') {
                return post;
              } else if (post.fullname.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
            }).map((post, index) => (
                <ul><div  key={index}><li>   
                <p>{post.id +" " + post.username + " " + post.fullname +" " +  post.email}</p></li>
             
              </div></ul>
           
            ))
          }
       
        </div>
        )
}
export default Home;