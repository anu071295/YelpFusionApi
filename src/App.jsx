
import './App.css'
import axios from 'axios';

function App() {
  const token = /**Add token */ '';
  const apiURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20&location=Indiana';
  const headers = {
    "Authorization": `Bearer ${token}`,
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
  }

    axios
    .get(apiURL, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data from Yelp API:', error);
    });
  return (
    <>
      Hello World
    </>
  )
}

export default App

  /*const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer' + token},mode: 'no-cors'};

  fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/
