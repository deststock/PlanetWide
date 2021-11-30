import React, { useState } from 'react'

const PlanetForm = (props) => {

    const { onSubmitProp } = props
    const [name, setName] = useState("")
    const [namedFor, setNamedFor] = useState("")
    const [image, setImage] = useState("")
    const [orbit, setOrbit] = useState("") // earth orbits 
    const [discovery, setDiscovery] = useState("") //discovery information
    const [diameter, setDiameter] = useState("")
    const [day, setDay] = useState("") // earth days
    const [fact, setFact] = useState("") 

    const submitHandler = e => {
        e.preventDefault()
        const planetData = {
            name, 
            namedFor,
            image, 
            orbit, 
            discovery, 
            diameter, 
            day, 
            fact 
        }
        onSubmitProp(planetData)
    }

    return(
        <div className="formContainer">
            <form onSubmit={submitHandler}>
                <p>
                    <label> Planet Name: </label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
                </p>
                <p>
                    <label> Named for: </label>
                    <input type="text" onChange={(e)=>setNamedFor(e.target.value)} value={namedFor}></input>
                </p>
                <p>
                    <label> Image URL: </label>
                    <input type="text" onChange={(e)=>setImage(e.target.value)} value={image}></input>
                </p>
                <p>
                    <label> Orbit in Earth Years: </label>
                    <input type="text" onChange={(e)=>setOrbit(e.target.value)} value={orbit}></input>
                </p>
                <p>
                    <label> Discovery Information: </label>
                    <input type="text" onChange={(e)=>setDiscovery(e.target.value)} value={discovery}></input>
                </p>
                <p>
                    <label> Diameter: </label>
                    <input type="text" onChange={(e)=>setDiameter(e.target.value)} value={diameter}></input>
                </p>
                <p>
                    <label> Day in Earth days: </label>
                    <input type="text" onChange={(e)=>setDay(e.target.value)} value={day}></input>
                </p>
                <p>
                    <label> Fact about planet: </label>
                    <input type="text" onChange={(e)=>setFact(e.target.value)} value={fact}></input>
                </p>
                
                <button> Add Planet </button>
            </form>
        </div>
    )
}

export default PlanetForm;