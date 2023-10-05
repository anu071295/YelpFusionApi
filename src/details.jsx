import './App.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import App from './App.jsx'


function Details() {

  const navigate = useNavigate();
  
  return (
    <>
    <button onClick={() => navigate("/")}>Go Home</button>
    <br></br><br></br>
      Details Go Here
      
    </>
  )
}

export default Details;