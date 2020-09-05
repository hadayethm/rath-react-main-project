import React from 'react'
import leftimg from '../../assets/img/features-1-mockup.png'
import FeaturesInnos from '../home-one/FeaturesData'
import FeatList from '../home-one/FeaturesList'

 const Features=()=> {

 const newlist= (val)=>{
   return(
    <FeatList heading={val.heading} 
    title={val.title}
     imgsrc={val.imgsrc} />
   )

 }

    return (
        <>
            <section id="features" className="features-1-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="features-1-wrapper">
                    <div className="features-1-all-box">

                           {FeaturesInnos.map(newlist)}

                    </div>

                    <div className="features-1-mobile-mockup">
                        <img src={leftimg} alt="Features" />
                    </div>

                </div>
            </div>
        </div>
    </div>


    <div className="background-shape position-absolute"><img src="assets/img/hero-bg-effect.png" alt="bg" /></div>
    <div className="background-corner-bg-img position-absolute"><img src="assets/img/corner.png" alt="Corner" /></div>


</section>
        </>
    )
}
export default Features;