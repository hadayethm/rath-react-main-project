import React from 'react'
import Carousel from 'react-elastic-carousel';
import AppSlider from '../home-one/AppSliderCom';
import Appimgone from '../../assets/img/screenshots-slider-img/app-sc-2.png'
import Appimgtwo from '../../assets/img/screenshots-slider-img/app-sc-3.png'
import Appimgthree from '../../assets/img/screenshots-slider-img/app-sc-4.png'
import Appimgfour from '../../assets/img/screenshots-slider-img/app-sc-5.png'
import imgside from "../../assets/img/app-screenshot-bg-effect.png"


const AppScreen = ()=> {
    const AppsliderInfo = {
            heading:"App Screenshots",
            title:"Maecenas pretium neque vel odio tristique sagittis. Mauris nec erat id erat rhoncus fringilla ac et tellus. Praesent eu sodales est."
            
    };
    const breakPoints = [
        {Width:0, itemsToShow:4},
        {Width:1200, itemsToShow:2},

    ];
    return (
        <>
    <section className="app-screenshots-slider-area bg-white" id="screenshots">
    <div className="background-shape position-absolute"><img src={imgside} alt="bg" /></div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="section-title-area">
                    <h2 className="section-heading">{AppsliderInfo.heading}</h2>
                    <p className="section-subheading">{AppsliderInfo.title}</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="screenshots-slider-wrapper position-relative">
               
                    <div className="screenshots-slider position-relative">
                    <Carousel breakPoints={breakPoints}>
                        <AppSlider imgsrc={Appimgone} />
                        <AppSlider imgsrc={Appimgtwo} />
                        <AppSlider imgsrc={Appimgthree} />
                        <AppSlider imgsrc={Appimgfour} />
                        <AppSlider imgsrc={Appimgone} />
                        <AppSlider imgsrc={Appimgfour} />
                        <AppSlider imgsrc={Appimgtwo} />
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default AppScreen;
