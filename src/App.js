import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { FatchApi } from './Components/Api/Index'
import { Cards, Charts } from './Components/Index'

export const App = () => {
  const [Data, setData] = useState([])
  useEffect(async () => {
    const Api = await FatchApi()
    setData(Api)
  }, [])


  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <Cards Data={Data} />
          </div>
          <div className="col-md-4">
            <h1>Country Picker</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 mt-5">
            <div className="Chart-title mb-3">
              <h2 className="text-center">CountryPicker</h2>
            </div>
            <Charts />
          </div>
        </div>
      </div>
    </>
  )
}

