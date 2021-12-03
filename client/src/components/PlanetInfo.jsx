import React from 'react'

const PlanetInfo = (props) => {

    const { thisPlanet } = props


    return (
        <div className="planetBox">
            <div>
            
            </div>
            <div className="planetPhoto">
                <img src={thisPlanet.image} alt={thisPlanet.name} ></img>
            </div>
            <div className="mainInfo">
                <h1> {thisPlanet.name} </h1>
                <br/>
                <p> {thisPlanet.namedFor} </p>
                <p> Discovery: {thisPlanet.discovery} </p>
                <p> Diameter: {thisPlanet.diameter} </p>
                <p> Orbit: {thisPlanet.orbit} </p>
                <p> Day: {thisPlanet.day} </p>
                <br/>
                <p className="planetInfo"> {thisPlanet.fact} </p>
            </div>
        </div>

    )
}

export default PlanetInfo;