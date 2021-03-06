import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'
import PlanetInfo from '../components/PlanetInfo'

const Details = (props) => {

    const { changeSubmitted, planets } = props
    const [loaded, setLoaded] = useState(false)
    const [thisPlanet, setThisPlanet] = useState([]) 
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/planet/' + id)
        .then( res => {
            setThisPlanet(res.data) 
            changeSubmitted()
        })
    }, [changeSubmitted])
    
    return (
        <div className="container1">
            <NavBar planets={planets}/>
            <div className="mainContent">
                <PlanetInfo thisPlanet={thisPlanet} />
            </div>

        </div>
    )

}

export default Details;