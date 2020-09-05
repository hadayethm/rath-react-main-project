import React from 'react'
import part from '../../assets/img/hero-bg-effect.png'

const Banner = () => {
    return (
        <>
 <div id="home" className="home-banner-area position-relative">
    <div className="particle-bg"><img src={part} alt="particle" /></div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="hero-area-wrapper position-relative wow fadeInLeft">
                    <div className="hero-area-content">
                        <h1>Organize your personal and social life</h1>
                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia meaque ipte tres quet</p>
                        <div className="hero-button-box">
                            <a href="https://play.google.com/store/apps" className="theme-button"><i className="fab fa-google-play"></i>Play Store</a>
                            <a href="https://apps.apple.com/us/app/apple-store/id375380948" className="theme-button"><i className="fab fa-apple"></i>App Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Banner;
