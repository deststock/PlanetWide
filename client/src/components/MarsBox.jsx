import React from 'react' 

const MarsBox = (props) => {

    const {marsPics} = props

    return (
        <div className="boxContainer">
            <div className="box">
            {/* {
                    marsPics.map((photo, i) => 
                    <p key={i}> {photo.earth_date} </p>
                    )
                } */}
                <p> Coming soon! </p>
            </div>
            
        </div>
    )
}

export default MarsBox;