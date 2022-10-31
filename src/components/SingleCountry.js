import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  axios  from "axios";
import { HalfMalf } from "react-spinner-animated";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




function SingleCountry () {

    const [countryData, setCountryData] = useState([])
    const [borderCountries, setBorderCountries] = useState([])
    const [loadingData, setLoading]= useState(false);


        let { countryName } = useParams();





    useEffect(()=>{

        axios.get(`https://restcountries.com/v2/name/${countryName}`)

         .then(function (response) {


           setCountryData(response.data[0]);

           const  borders =  response.data[0]?.borders;

           



            borders?.forEach( async (border, index) => {


            const response = await axios.get(`https://restcountries.com/v2/alpha/${border}`);

            const data = response.data.name

            setBorderCountries(prevValue => {

                return [...prevValue, data];

              })



           });




           setLoading(true)

         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })




       }, [countryName])










// the data saved for border countries is duplicating in the array is stored into so i had to use Filter method to get rid of that before using it

const newBorderCOuntries = borderCountries.filter((country, index) => {
  return borderCountries.indexOf(country) === index;
});















    return (
         <div>


<div className="container-fluid singleCountry-container">

<Link to="/" className="btn btn-lg back-btn" type="button" aria-expanded="false">
  <KeyboardBackspaceIcon/> Back
</Link>


{ loadingData ? <div className="row my-5">

  <div className="col-12 col-md-6">
    <img className="flag-img" src={countryData.flags.svg} alt={countryData.name} />
  </div>

  <div className="col-12 col-md-6 country-detail-box">
    <div className="row">
      <h5 className="card-title my-3 fs-1">{countryData.name}</h5>
      <div className="col-12 col-md-6">

            <p><span className="category me-1">Native Name:</span>{countryData.nativeName}</p>

            <p ><span className="category me-1">Population:</span>{countryData.population.toLocaleString()}</p>

            <p ><span className="category me-1">Region:</span>{countryData.region}</p>

            <p ><span className="category me-1">Sub Region:</span>{countryData.subregion}</p>

            <p><span className="category me-1">Capital:</span>{countryData.capital}</p>



      </div>

      <div className="col-12 col-md-6">

            <p ><span className="category me-1">Top Level Domain:</span>{countryData.topLevelDomain}</p>

          <div className="languages-list-box">
            <p><span className="category">Currencies:</span></p>
            {countryData?.currencies?.map( (currency, index) =>{ return <p key={index}> {currency.name} </p>})}
          </div>

          <div className="languages-list-box">
            <p><span className="category">Languages:</span></p>

            {countryData.languages.map( (language, index) =>{ return <p key={index}>{language.name} </p>})}

          </div>



      </div>

      <div className="col-12">

        <div className="borderCountries-container">

            <h5>Border Countries:</h5>

           {   newBorderCOuntries?.length ? newBorderCOuntries.map( (borderCountry, index) =>{



                return <p key={index} > {borderCountry}</p>


              }) : "No Border Countries" }






            </div>


          </div>

        </div>






      </div>

    </div> : <HalfMalf /> }

  </div>

</div>


    )

}

export default SingleCountry;
