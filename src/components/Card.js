
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../card.css"



function Card ({data}) {



  return  (
    <div className="container-fluid countryList-container">

    <div  className="row g-4 ">

   { data.map(country => {

      return ( 
        
        
      <div  key={country.numericCode} className="col-12 col-md-4 col-lg-3 card-box">

      <Link  to={`/${country.name.toLowerCase()}`}>
        <motion.div 
           whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 50px 0px rgb(0 0 0 0.05)"
            }} 
        
          className="card h-100" >
          <img src={country.flags.png} className="card-img-top" alt="..."/>
          <div  className="card-body">
            <h5 className="card-title my-3">{country.name}</h5>
              <p><span className="category me-1">Population:</span>{country.population.toLocaleString()}</p>
              <p><span className="category me-1">Region:</span>{country.region}</p>
              <p><span className="category me-1">Capital:</span>{country.capital}</p>

          </div>
        </motion.div>
      </Link>


      </div>);

    } )}

    </div>
    </div>

  );

}

export default Card;
