import { Link } from "react-router-dom";
import DownArrow from '@mui/icons-material/KeyboardArrowDownRounded';
import React, { Component } from 'react';
import Navbar from "../components/Navbar";


class Home extends Component {
    render() {
        return (
            <><Navbar />
                <div className="body">
                    <div className="section1">
                        <div className="title">
                            <div className="slogan">
                                <h1>Cruze</h1>
                                <p className="titletxt">through</p>
                            </div>
                            <div className="slogan">
                                <p className="titletxt">{'    '}your</p>
                                <h1>routes</h1>
                            </div>
                            <div className="info">
                                <p >Welcome to <span>Cruze</span> the carpooling application designed </p>
                                <p >specifically for the new age. </p>
                                <p >Say goodbye to your daily commute woes and hello to a </p>
                                <p >smarter, more sustainable way to travel.</p>
                            </div>
                        </div>
                        <div className="model">
                            <iframe title="http://cruze.club" className="spline-logo" src='https://my.spline.design/untitled-5bbcaff412eec1d5dde9cdd87f4ce2cc/' frameborder='0' width='100%' height='100%'></iframe>
                        </div>
                    </div>
                        <div className="downarrow">
                            <Link to='/waitlist'>
                                <DownArrow className="downarrow" style={{ fontSize: "60px" }} />
                            </Link>
                        </div>
                </div>
            </>
        );
    }
}

export default Home;