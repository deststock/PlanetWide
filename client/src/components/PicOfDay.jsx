import React, { useState } from 'react' 

const PicOfDay = (props) => {
    
    const {pic} = props
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="picContainer">
            <div className="pic">
                <img src={pic.hdurl} alt="Picture of the day"></img>
            </div>
            <h3> Astrology Photo of the Day </h3>
            <button id="openModal" onClick={togglePopup}> Click here to view details...</button>
            {isOpen ? (
            <div id="photoModal">
                <div>
                    <button id="closeModal" onClick={togglePopup}> X </button>
                </div>
                <div id="photoModalDetails">
                    <img src={pic.hdurl} alt="pic of the day"></img>
                    <div className="exp">
                        <h3> {pic.title} </h3>
                        <br/>
                        <p> {pic.explanation} </p>
                    </div></div>
            </div>
            ): <p></p> }
            
        </div>
    )

}

export default PicOfDay;