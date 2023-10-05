
import './App.css'
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Link,useNavigate} from 'react-router-dom';
import Details from './details'

function App() {
  const token = /**Add token */ '';
  const apiURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location=Indiana';
  const headers = {
    "Authorization": `Bearer ${token}`,
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
  }

    // axios
    // .get(apiURL, { headers })
    // .then((response) => {
    //   console.log(response.data);
    // })
    // .catch((error) => {
    //   console.error('Error fetching data from Yelp API:', error);
    // });
    const navigate = useNavigate();
    
  return (
    <>
    
      Yelp API
      <br></br>
      <br></br>
      <input type="text" id="location" name="location"></input>
      <br></br>
      <br></br>
      <button onClick={() => navigate("/details")}>Submit</button>
        {/* <button id="submit" type="button" onClick={details}>Submit </button> */}
      
      
      
    </>
  )
}

export default App


//on submit function
//get input from page
//craft api url for search
//get id of random business 
//route to business details page
//call business details api
//display business details to page
//back button to return to search

  /*const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer' + token},mode: 'no-cors'};

  fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/
