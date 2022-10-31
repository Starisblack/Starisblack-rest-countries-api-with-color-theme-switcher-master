import React, { useEffect, useState } from "react";
import SearchFilterBox from "./SearchFilter";
import Card from "./Card"
import  axios  from "axios";
import { HalfMalf } from "react-spinner-animated";
import 'react-spinner-animated/dist/index.css'
import BasicModal from "./Modal";

function App() {

  const [countriesData, setAllCountriesData] = useState([]);
  const [loadingData, setLoading]= useState(true);
  const [userInput, setSearch] = useState("");
  const [filterParam, setFilterParam] = useState("");
  const [searchParam, setSearchParam] = useState(false);
 
 
// I used searchParam to detect whether the user is using search component or Filter button 


  useEffect(()=>{

   axios.get("https://restcountries.com/v2/all/?fields=name,population,region,capital,flags,numericCode")
    .then(function (response) {

      
      
      setAllCountriesData(response.data);

      setLoading(false);

     

    })
    .catch(function (error) {
      

      console.log(error);
    })


  }, [])




// set user input

function searchInput (e){
    const text = e.target.value
    
    setSearch(text);
    setSearchParam(false)
}


// get region selected by user 

function filtered (region){

  document.querySelector(".dropdown-menu").classList.remove("show");
  setFilterParam(region);

  setSearchParam(true)

}



// this function use to filter the countries by region using dropdown list


function filterByRegion (countriesData){


  return countriesData.filter(country =>  {

    if( country.region.toLowerCase() === filterParam.toLowerCase() ){

      return countriesData;

    } else if ( filterParam === "All") {

       return countriesData;
    }
    
    // (country.region.toLowerCase() === filterParam.toLowerCase() )
  
  })

}



// this function use to filter the countries by name using user input in search bar 

function search (countriesData){

  return countriesData.filter(country => (country.name.toLowerCase().includes(userInput.toLowerCase()) ))

}





  return (
    <div>

    <SearchFilterBox 
      userInput={userInput}
      searchInput={searchInput}
      filtered   ={filtered}
    />

    <BasicModal />

     { loadingData ?  <HalfMalf   text={"Loading..."} center={false}/> : <Card  
    
     data={ searchParam ? filterByRegion(countriesData) : search(countriesData)}/>  
     
     }

        </div>
  );
}

export default App;
