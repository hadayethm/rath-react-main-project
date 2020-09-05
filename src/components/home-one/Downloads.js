import React from 'react'
import palystor from '../../assets/img/apple-store-icon.png'
import apple from '../../assets/img/google-play-store-icon.png'
import mockupone from '../../assets/img/get-free-download1.png'
import mockuptwo from '../../assets/img/get-free-download2.png'

const Downloads=()=> {
    const downloadsInfo ={
        heading:"Get Free Download",
        title:"Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis"
    }
    return (
        <>
 <section id="download" className="get-free-download-area bg-primary">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="get-free-download-wrapper">

                    <div className="section-title-area">
                        <h2 className="section-heading">{downloadsInfo.heading}</h2>
                        <p className="section-subheading">{downloadsInfo.title}.</p>
                        <div className="hero-button-box">
                            <a href="https://play.google.com/store/apps"><img src={palystor} alt="Apple Store" /></a>
                            <a href="https://apps.apple.com/us/app/apple-store/id375380948"><img src={apple} alt="Play Store" /></a>
                        </div>
                    </div>

                    <div className="free-download-mobile-mockup wow fadeInRight">
                        <img src={mockupone} alt="Mockup" />
                        <img src={mockuptwo} alt="Mockup2" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Downloads;
