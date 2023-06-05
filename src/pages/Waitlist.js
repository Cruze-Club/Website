import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import StepsImg from "../assets/steps.png";
import { Link } from "react-router-dom";
import DownArrow from '@mui/icons-material/KeyboardArrowDownRounded';
import Footer from '../components/Footer';
import apple from "../assets/appstore.png"
import google from "../assets/googleplay.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step 3.png"
import step4 from "../assets/step 4.png"
import step5 from "../assets/step 5.png"
import ActionButton from '../components/ActionButton';

class Waitlist extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="body">
                    <div className="section1">
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
                                <p className="info">We know that waiting isn't always fun, but we promise it'll be worth</p>
                                <p className="info">it. Our team is hard at work making sure that the <span>Cruze</span> app is</p>
                                <p className="info">everything you've been dreaming of and more. We're talking sleek</p>
                                <p className="info">design, intuitive features, and a user-friendly experience that'll</p>
                                <p className="info">make your daily commute a breeze.</p>
                                <ActionButton />
                            </div>
                        </div>
                        <div>
                        <iframe className="spline-logo" src='https://my.spline.design/iphone14procopy-d3bd75db7f324a56cc7bd9bab5c0774b/' frameborder='0' width='100%' height='100%'></iframe>
                        </div>
                    </div>
                    <div className="getstarted">
                        <h1 className="gettingS">
                            getting started...
                        </h1>
                    </div>
                </div>
                <div className="steps">
                    <div className="steps-img">
                        <img className='stepssImg' src={StepsImg} alt="" />
                    </div>
                    <div className="steps-info">
                        <div className="step">
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
                        <div className="step">
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
                        <div className="step">
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
                        <div className="step">
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
                        <div className="step">
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
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Waitlist;