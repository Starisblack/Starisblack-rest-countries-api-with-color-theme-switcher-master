import React, { useEffect, useState } from "react";
import SearchFilterBox from "./SearchFilter";
import Card from "./Card"
import  axios  from "axios";
// import {orderBy} from "lodash";
import { HalfMalf } from "react-spinner-animated";
import 'react-spinner-animated/dist/index.css'

function App() {

  const [countriesData, setAllCountriesData] = useState([]);
  const [loadingData, setLoading]= useState(true);
  const [userInput, setSearch] = useState("");
  const [filterParam, setFilterParam] = useState("");
  const [searchParam, setSearchParam] = useState(false);
 
 


  useEffect(()=>{

   axios.get("https://restcountries.com/v2/all/?fields=name,population,region,capital,flags,numericCode")
    .then(function (response) {

      // const sortedCountryList = orderBy(response.data, ["name"], ["asc"]);
      
      setAllCountriesData(response.data);

      setLoading(false);

     

    })
    .catch(function (error) {
      // handle error
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

  setFilterParam(region);
  setSearchParam(true)

}



// this function use to filter the countries by region using dropdown list


function searchByRegion (countriesData){

  return countriesData.filter(country => (country.region.toLowerCase() === filterParam.toLowerCase() ))

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

     { loadingData ?  <HalfMalf   text={"Loading..."} center={false}/> : <Card  
    
     data={ searchParam ? searchByRegion(countriesData) : search(countriesData)}/>  
     
     }

        </div>
  );
}

export default App;
