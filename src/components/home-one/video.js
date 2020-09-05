import React from 'react'
import poster from '../../assets/img/video-area-video-poster.jpg'

const homeVideoObj ={
    para:"Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue."
}
 const Video = () => {

    return (
        <>
            <section id="video-area" className="video-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="video-wrapper">
                    <img src={poster} alt="Video" />
                    <a className="venobox play-button">Hi</a>
                </div>
                <p>{homeVideoObj.para}</p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Video;
