import React from 'react'
import logo from '../assets/logo.png'
import '../App.css';
import apple from "../assets/appstore.png"
import google from "../assets/googleplay.png"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="border"></div>
            <div className="footer-contents">
                <div className="col1">
                    <Link to="/">
                        <img className="nav-logo" src={logo} alt="" />
                    </Link>
                    <p className='footerinfo'>© 2023 Cruze Carpooling Services PVT LTD </p>
                    <p className='footerinfo'>All rights reserved.</p>
                    <p className='footerinfo-2'>All trademarks, logos and brand names are</p>
                    <p className='footerinfo-2'>the property of respective owners</p>
                    <p className='footerinfo'>Terms of Service</p>
                    <p className='footerinfo'>Privacy Policy</p>
                </div>
                <div className="col2">
                    <p className='footerinfo'>download on:</p>
                    <div className="stores">
                        <img src={apple} className='logo' alt="" />
                        <img src={google} className='logo' alt="" />
                    </div>
                    <div className="links">
                        <Link to="https://www.facebook.com/profile.php?id=100089832060209">
                            <FacebookIcon className="links" style={{ fontSize: "42px" }} />
                        </Link>
                        <Link to="https://www.instagram.com/cruzepakistan/">
                            <YouTubeIcon className="links" style={{ fontSize: "42px" }} />
                        </Link>
                        <Link to="https://www.instagram.com/cruzepakistan/">
                            <TwitterIcon className="links" style={{ fontSize: "42px" }} />
                        </Link>
                        <Link to="https://www.instagram.com/cruzepakistan/">
                            <InstagramIcon className="links" style={{ fontSize: "42px" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/company/88400898/">
                            <LinkedInIcon className="links" style={{ fontSize: "42px" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer