import React from 'react'
import { Link } from 'react-router-dom' 

const NavBar = (props) => {

    const { planets } = props

    return (
        <div className="navBar">
            <Link to="/"><h1> PlanetWide </h1></Link>
            <div className="links"> 
                {
                    planets.map((planet, i) => 
                    <Link to={`/${planet._id}`} key={i}> {planet.name} </Link>
                    )
                } 
            </div>
        </div>
    )
}

export default NavBar;