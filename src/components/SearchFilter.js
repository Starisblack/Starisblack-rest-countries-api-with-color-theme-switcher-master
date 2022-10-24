import SearchIcon from '@mui/icons-material/Search';
import Dropdown from 'react-bootstrap/Dropdown';

function SearchFilterBox (props){



            
      return(  <div   className="container-fluid search-container ">
       
        <div className="row d-flex  justify-content-between align-items-center">

                      <div className="col-md-5">

                        <div className="search">
                          <SearchIcon  className="fa-search"/>
                          <input type="text"   onChange= {props.searchInput}  value={props.userInput} className="searchInput form-control" placeholder="Search for a country..."/>
                
                        </div>

                      </div>

                      <div className="col-md-4 text-end">



                      <Dropdown   className="dropdown"> 
                        <Dropdown.Toggle  style={ props.switchColor ? props.customStyle : null} id="dropdown-basic"  className="filterButton">
                             Filter by Region
                         </Dropdown.Toggle>
                        <div>
                         <Dropdown.Menu style={ props.switchColor ? props.customStyle : null}>
                            <ul  >
                              <li onClick={()=> props.filtered("Africa")}> Africa</li>
                              <li onClick={()=> props.filtered("Americas")}>  America </li> 
                              <li onClick={()=> props.filtered("Asia")}> Asia  </li>
                              <li onClick={()=> props.filtered("Europe")} >  Europe  </li>
                              <li onClick={()=> props.filtered("Oceania")}>  Oceania </li>
                            </ul>
                        
                        </Dropdown.Menu>
                        </div>
                </Dropdown>

                        

                      </div>

                    </div>
        </div>

      );
}


export default SearchFilterBox;

        