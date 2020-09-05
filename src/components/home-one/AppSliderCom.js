import React from "react"

const AppSlider=  (props) => {
        return(
            <>
                    <div className="item">
                            <div className="screenshots-box">
                                <img src={props.imgsrc} alt="Screenshots" />
                            </div>
                        </div>
            </>
        )
} 

export default AppSlider;