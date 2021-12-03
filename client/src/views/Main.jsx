import React from 'react'
import NavBar from '../components/NavBar'
import PicOfDay from '../components/PicOfDay'
import lightsOnEarth from '../static/lights_earth.jpg'
import News from '../components/News'

const Main = (props) => {

    const { planets,pic } = props
    
    return (
        
        <div className="container1" style={{ backgroundImage: `url(${lightsOnEarth})`}}>
            <NavBar planets={planets} />
            <div className="mainContent">
                <div className="leftColumn"> 
                    <PicOfDay pic={pic}/>
                </div>
                <div className="rightColumn">
                    <div className="message">
                        <h2> Ready to start Exploring? </h2>
                        <p> Click on a link above to learn more about that planet!</p>
                    </div>
                    <News/>
                </div>
            </div>

        </div>
    )

}

export default Main;