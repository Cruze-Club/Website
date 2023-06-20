import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import StepsImg from "../assets/steps.png";
import Footer from '../components/Footer';
import apple from "../assets/appstore.png"
import google from "../assets/googleplay.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step 3.png"
import step4 from "../assets/step 4.png"
import ActionButton from '../components/ActionButton';

class Waitlist extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="body">
                    <div className="section3">
                        <div className="title">
                            <div className="slogan">
                                <p className="titletxt">get     on</p>
                            </div>
                            <div className="slogan">
                                <p className="titletxt">the</p>
                                <h1>waitlist</h1>
                            </div>
                            <div className="slogan">
                                <p className="titletxt">today</p>
                            </div>
                            <div className="info">
                                <p >We know that waiting isn't always fun, but we promise it'll be worth</p>
                                <p >it. Our team is hard at work making sure that the <span>Cruze</span> app is</p>
                                <p >everything you've been dreaming of and more. We're talking sleek</p>
                                <p >design, intuitive features, and a user-friendly experience that'll</p>
                                <p >make your daily commute a breeze.</p>
                                <div className="actBtn">
                                    <ActionButton />
                                </div>
                            </div>
                        </div>
                        <div className='model2'>
                            <iframe title="http://cruze.club"
                                className="spline-logo" src='https://my.spline.design/iphone14procopy-d3bd75db7f324a56cc7bd9bab5c0774b/' frameborder='0' width='150%' height='100%'></iframe>
                        </div>
                    </div>
                    <div className="getstarted">
                        <h1 className="gettingS">
                            getting started...
                        </h1>
                    </div>


                    <div className="steps">
                        <div className="steps-img">
                            <img className='stepssImg' src={StepsImg} alt="" />
                        </div>
                        <div className="steps-info">
                            <div className="step" id="step1">
                                <div className="heading">
                                    <h1>Step 1:</h1>
                                </div>
                                <div className="descp">
                                    <p>download the Cruze Waitlist App from Google Play or the Apple App Store.</p>
                                </div>
                                <div className="stepimg">
                                    <div className="stores">
                                        <img src={apple} alt="" />
                                        <img src={google} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step" id="step2">
                                <div className="heading">
                                    <h1>Step 2:</h1>
                                </div>
                                <div className="descp">
                                    <p>create an account, reserve a spot on the Waitlist and become a Uzer.</p>
                                    <p>you can apply referral of your friend to jump up 10 places on the Waitlist or you can send your referral to your friends to jump 5 places on the Waitlist.</p>
                                    <p>the higher up you are on the waitlist, the quicker you will get access to the main application.</p>
                                </div>
                                <div className="stepimg">
                                    <div className="stores">
                                        <img src={step2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step" id="step3">
                                <div className="heading">
                                    <h1>Step 3:</h1>
                                </div>
                                <div className="descp">
                                    <p>once you are higher up on the Waitlist you will get an update which would allow you to access the main application.</p>
                                </div>
                                <div className="stepimg">
                                    <div className="stores">
                                        <img src={step3} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step" id="step4">
                                <div className="heading">
                                    <h1>Step 4:</h1>
                                </div>
                                <div className="descp">
                                    <p>create an account, reserve a spot on the Waitlist and become a Uzer.</p>
                                    <p>you can apply referral of your friend to jump up 10 places on the Waitlist or you can send your referral to your friends to jump 5 places on the Waitlist.</p>
                                    <p>the higher up you are on the waitlist, the quicker you will get access to the main application.</p>
                                </div>
                                <div className="stepimg">
                                    <div className="stores">
                                        <img src={step4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step" id="step5">
                                <div className="heading">
                                    <h1>Step 5:</h1>
                                </div>
                                <div className="descp">
                                    <h2>quick ride</h2>
                                    <p>once you join the desired club club you can now post a quick ride request or offer(only for Cruzer) by entering your daily pick-up & drop-off (this route will be saved in your routes tab for future use.).</p>
                                    <p>after requesting/offering your ride will be created and you will get notified when you get a match.</p>
                                    <p>after getting matches, the ride will be started at the start-time. now on the ride page you can communicate amongst the Cruzer(offerer)/Uzers(pessengers) of the ride. </p>
                                </div>
                                <div className="stepimg">
                                    <div className="stores">
                                        <img src={step2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="step" id="step6">
                                <div className="heading">
                                    <h1>Step 6:</h1>
                                </div>
                                <div className="descp">
                                    <h2>Completed!</h2>
                                    <p>Congratulations! now you can save upto 70% on your daily commute expense.</p>
                                    <p>-</p>
                                    <p>explore the verity of features provided by the application to help you Cruze through
                                        your routes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Waitlist;