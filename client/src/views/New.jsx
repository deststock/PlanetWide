import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import PlanetForm from '../components/PlanetForm'

const New = (props) => {

    const { changeSubmitted } = props
    const history = useHistory()
    const createPlanet = planet => {
        axios.post('http://localhost:8000/api/planets/new', planet)
            .then(res => {
                history.push('/')
                changeSubmitted()
                console.log(planet, "submitted")
            })
    }

    return (
        <div className="container1">
            <PlanetForm onSubmitProp = { createPlanet } changeSubmitted = {changeSubmitted} />
        </div>
    )
}

export default New;