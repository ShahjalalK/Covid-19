import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'
import { Cards, Carts, CuntryPicker } from './Components/Index'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [Data, setData] = useState([])

  const featchData = async () => {
    try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get('https://covid19.mathdro.id/api')
      const response = { confirmed, recovered, deaths, lastUpdate }
      setData(response)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    featchData()
  }, [])


  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-left">Covid Tracker App</h1>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
        <div className="covid-card">
          <div className="row">
            <div className="col-md-8">
              <Cards Data={Data} />
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
        </div>
        
        
      </div>
      <Carts />
      
    </div>
  );
}

export default App;
