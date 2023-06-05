import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carpool from "../assets/carpool.png";
import cruzer from "../assets/cruzer.png";
import uzer from "../assets/uzer.png";
import club from "../assets/clubs.png";
import apple from "../assets/appstore.png";
import google from "../assets/googleplay.png";

class Carpool extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="body">
          <div className="section1">
            <div >
              <img src={carpool} alt="" />
            </div>
            <div className="title">
              <div className="slogan">
                <h1>Carpooling</h1>
              </div>
              <div className="slogan">
                <p className="titletxt">is the future</p>
              </div>
              <div className="info">
                <p className="info">Cutting your daily commute cost down by 60%-70%, </p>
                <p className="info">using the power of sharing economy, Cruze offers its </p>
                <p className="info">users a carpooling solution like no other.</p>
                <p className="info">Now travel with the people you know and trust to all</p>
                <p className="info">of your regular destinations with ease in less than </p>
                <p className="info">half the cost.</p>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="section2">
          <div className="cards">
            <div className="card">
              <p className="card-smltxt">save upto</p>
              <h2 className="card-bigtxt">75%</h2>
            </div>
            <div className="card-pink">
              <p className="card-smltxt-pink">only</p>
              <h2 className="card-bigtxt-pink">women</h2>
              <p className="card-smltxt-pink">rides</p>
            </div>
            <div className="card">
              <p className="card-smltxt">fewer</p>
              <h2 className="card-bigtxt">traffic</h2>
              <p className="card-smltxt">jams</p>
            </div>
          </div>
          <div className="cards">
            <div className="card-pink">
              <p className="card-smltxt-pink">save upto</p>
              <h2 className="card-bigtxt-pink">75%</h2>
            </div>
            <div className="card">
              <p className="card-smltxt">only</p>
              <h2 className="card-bigtxt">women</h2>
              <p className="card-smltxt">rides</p>
            </div>
            <div className="card-pink">
              <p className="card-smltxt-pink">fewer</p>
              <h2 className="card-bigtxt-pink">traffic</h2>
              <p className="card-smltxt-pink">jams</p>
            </div>
          </div>
        </div>
        <div className="section1">
          <div>
            <img src={cruzer} alt="" />
          </div>
          <div className="title">

            <div className="slogan">
              <h1>Cruzer</h1>
            </div>

            <div className="info">
              <p className="info">Cruzer is someone who offers their personal vehicle(s).</p>
              <p className="info">as rides for the Uzers to join the ride if their routes </p>
              <p className="info">match. This means that you don’t have to worry about</p>
              <p className="info">dropping people off at different locations, instead you</p>
              <p className="info">only get rides that fall on your route. The Cruzer saves a</p>
              <p className="info">major chunk of their daily commute costs by reducing</p>
              <p className="info">upto 70% on each ride. </p>
              <p className="info">Become a Cruzer today to enable all Cruzer specific </p>
              <p className="info">features on the application. </p>
            </div>
          </div>

        </div>
        <div className="section1">

          <div className="title">

            <div className="slogan">
              <h1>Uzer</h1>
            </div>

            <div className="info">
              <p className="info">Expensive private rides everyday just to get to office, </p>
              <p className="info">university or your society? Forget the old ways of </p>
              <p className="info">commute and join the relevant club and start </p>
              <p className="info">carpooling. </p>
              <p className="info">Secure and managed communities that allow you to</p>
              <p className="info">carpool with people you know. Simply post your route in </p>
              <p className="info">a club and get auto matches from Cruzers on your  </p>
              <p className="info">route.</p>
              <p className="info">Download the app today and start saving upto 50% on </p>
              <p className="info">your daily commute prices.</p>
            </div>
            <div className="stores">
              <img src={apple} className='logo' alt="" />
              <img src={google} className='logo' alt="" />
            </div>
          </div>
          <div>
            <img src={uzer} alt="" />
          </div>
        </div>
        <div className="section1">
          <div>
            <img src={club} alt="" />
          </div>
          <div className="title">

            <div className="slogan">
              <h1>Clubs & ClubChat</h1>
            </div>

            <div className="info">
              <p className="info">Expensive private rides everyday just to get to office, </p>
              <p className="info">university or your society? Forget the old ways of </p>
              <p className="info">commute and join the relevant club and start </p>
              <p className="info">carpooling. </p>
              <p className="info">Secure and managed communities that allow you to</p>
              <p className="info">carpool with people you know. Simply post your route in </p>
              <p className="info">a club and get auto matches from Cruzers on your  </p>
              <p className="info">route.</p>
              <p className="info">Download the app today and start saving upto 50% on </p>
              <p className="info">your daily commute prices.</p>
            </div>
            <div className="stores">
              <img src={apple} className='logo' alt="" />
              <img src={google} className='logo' alt="" />
            </div>
          </div>

        </div>
        <Footer />
      </>
    );
  }
}

export default Carpool;