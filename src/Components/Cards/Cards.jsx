import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CountUp from 'react-countup';
import './Cards.css'

const Cards = ({ Data: { confirmed, recovered, deaths, lastUpdate } }) => {    
    const [Datas, setDatas] = useState([])
    useEffect(() => {
        setDatas(!confirmed)
    }, [])
    const d = new Date(lastUpdate);
    return (
        <>
            <div className="cardsarea">
                <div className="card infected">
                    <div className="card-body">
                        <h3>Infected</h3>
                        {Datas ? <Spinner animation="border" style={{color: 'rgba(0, 0, 255, 0.5)'}} /> : <p>
                            <CountUp 
                                start={1785}
                                duration={2.75}
                                separator=","
                                end={confirmed.value} />                            
                        </p>}
                        <p>({d.toDateString()})</p>
                        <p>Number of active cases from COVID-19.</p>
                    </div>
                </div>
                <div className="card recovered">
                    <div className="card-body">
                        <h3>Recovered</h3>
                        {Datas ? <Spinner animation="border" style={{color: 'rgba(0, 255, 0, 0.5)'}} /> : <p>
                            <CountUp 
                                start={1785}
                                duration={2.75}
                                separator=","
                                end={recovered.value} />                            
                        </p>}
                        <p>({d.toDateString()})</p>
                        <p>Number of recoveries from COVID-19.</p>
                    </div>
                </div>
                <div className="card deaths">
                    <div className="card-body">
                        <h3>Deaths</h3>
                        {Datas ? <Spinner animation="border" style={{color : 'rgba(255, 0, 0, 0.5)'}} /> : <p>
                            <CountUp 
                                start={1785}
                                duration={2.75}
                                separator=","
                                end={deaths.value} />                            
                        </p>}
                        <p>({d.toDateString()})</p>
                        <p>Number of active death from COVID-19.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards
