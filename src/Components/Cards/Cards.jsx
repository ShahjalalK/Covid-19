import React from 'react'
import CountUp from 'react-countup';
import './Cards.css'

const Cards = ({ Data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Looding..."
    }
    return (
        <>
            <section className="headers">
                <div className="card infected">
                    <div className="card-body">
                        <h3 className="text-secondary">Infected</h3>
                        <h4>
                            <CountUp start={0} duration={2.5} separator="," end={confirmed.value} />
                        </h4>
                        <h5 className="text-secondary">({new Date(lastUpdate).toDateString()})</h5>
                        <h6>Number of active cases of COVID-19</h6>
                    </div>
                </div>

                <div className="card recovered">
                    <div className="card-body">
                        <h3 className="text-secondary">Recovered</h3>
                        <h4> <CountUp start={0} duration={2.5} separator="," end={recovered.value} /></h4>
                        <h5 className="text-secondary">({new Date(lastUpdate).toDateString()})</h5>
                        <h6>Number of active recoveris from COVID-19</h6>
                    </div>
                </div>

                <div className="card death">
                    <div className="card-body">
                        <h3 className="text-secondary">Deaths</h3>
                        <h4><CountUp start={0} duration={2.5} separator="," end={deaths.value} /> </h4>
                        <h5 className="text-secondary">({new Date(lastUpdate).toDateString()})</h5>
                        <h6>Number of deaths caused by COVID-19</h6>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Cards
