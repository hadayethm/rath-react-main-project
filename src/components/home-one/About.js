import React from 'react'
import CountUp from 'react-countup';
import leftimg from '../../assets/img/about-page-left.png'
import countone from '../../assets/img/counter-bg1.png'
import counttwo from '../../assets/img/counter-bg2.png'
import countthree from '../../assets/img/counter-bg3.png'


const About= ()=> {

    const aboutInfo = {
        heading:"A good decision can change your life forever",
        title:"A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them."
    }

    return (
        <>
<section id="about" className="about-area">
    <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="about-wrapper">
                    <div className="about-left-side wow fadeInLeft">
                        <img src={leftimg} alt="About" />
                    </div>

                    <div className="about-right-side">
                        <div className="section-title-area">
                            <h2 className="section-heading">{aboutInfo.heading}</h2>
                            <p className="section-subheading">{aboutInfo.title}</p>
                        </div>

                        <div className="counter-area wow fadeInDown">
                            <div className="counter-box">
                                <img src={countone} alt="Counter" />
                                <div className="count-content">
                                                <CountUp
                                                    start={0}
                                                    end={10}
                                                    duration={2.75}
                                                    separator=" "
                                                    decimals={0}
                                                    decimal="."
                                                    >
                                                    </CountUp>M</div>
                                <h5 className="count-text">Downloads</h5>
                            </div>

                            <div className="counter-box">
                                <img src={counttwo} alt="Counter" />
                                <div className="count-content">
                                <CountUp
                                                    start={0}
                                                    end={4.8}
                                                    duration={2.75}
                                                    separator=" "
                                                    decimals={1}
                                                    decimal="."
                                                    >
                                                    </CountUp>
                                </div>
                                <h5 className="count-text">Avg Rating</h5>
                            </div>

                            <div className="counter-box">
                                <img src={countthree} alt="Counter" />
                                <div className="count-content">  <CountUp
                                                    start={0}
                                                    end={96}
                                                    duration={2.75}
                                                    separator=" "
                                                    decimals={0}
                                                    decimal="."
                                                    >
                                                    </CountUp>K</div>
                                <h5 className="count-text">Reviews</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default  About;