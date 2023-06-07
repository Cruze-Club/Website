import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from "../assets/team.png";

class About extends Component {
  render() {
    return (
        <>
          <Navbar />
          <div className="section">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquid explicabo animi voluptatibus? Quia exercitationem nobis quae nesciunt culpa sit? Voluptate nam vero consequuntur officia iure delectus eaque. Soluta, dolor quia placeat aliquam optio dolorum quaerat recusandae officia error minima, et veniam rerum magnam eos voluptates cum quod voluptatem saepe.</p>
          </div>
          <div className="section">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aliquid explicabo animi voluptatibus? Quia exercitationem nobis quae nesciunt culpa sit? Voluptate nam vero consequuntur officia iure delectus eaque. Soluta, dolor quia placeat aliquam optio dolorum quaerat recusandae officia error minima, et veniam rerum magnam eos voluptates cum quod voluptatem saepe. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus fuga eaque similique et impedit fugit blanditiis rerum quam commodi odio velit saepe, ea ullam dicta recusandae maxime facilis libero, veritatis corrupti voluptas consequatur quasi. Quibusdam esse ducimus nesciunt sequi minus quos earum repudiandae excepturi velit non! Neque porro ex error odit nesciunt repudiandae quae velit magnam voluptate dolorem! Earum quidem odio veniam, maiores ratione aliquid iste sunt eligendi perspiciatis numquam eos. Reiciendis odio repudiandae quas laboriosam eius exercitationem esse explicabo non dolore iste quaerat nemo aliquam atque ipsum animi numquam quisquam veritatis, corporis cupiditate veniam totam. Culpa quaerat voluptas officiis.</p>
          </div>
          <div className="section">
            <h1>Meet the team</h1>
            <img src={Team} alt="" />
          </div>
          <Footer />
        </>
    );
  }
}

export default About;