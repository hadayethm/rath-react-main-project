import React from 'react';

const FeatList = (props) => {
    return (
        <>
               <div className="single-features-1-box wow fadeInUp">
                            <div className="single-features-1-text">
                                <h4>{props.heading}</h4>
                                <p>{props.title}</p>
                            </div>
                            <div className="single-features-1-img position-relative">
                            <img src={props.imgsrc} alt="Icon 1" /></div>
                    </div>
        </>
    )
}

export default FeatList;