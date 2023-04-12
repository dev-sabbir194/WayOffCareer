import React from 'react';
import myImage from '../../assets/All Images/P3OLGJ1 copy 1.png'
import './Header.css'
const Header = () => {
    return (
            <div>
          {/* banner */}
          <div className="banner container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className='banner-title'>One Step Closer To Your <span id='drem'>Dream Job</span></h2>
                <p className="banner-discription">Are you ready to take the next step in your career? Explore endless possibilities and find your dream job today! With opportunities in every field and industry, the perfect job is just a click away.</p>
                <button className="btn btn-primary" id='strat-button'>Get Started</button>
              </div>
              <div className="col-md-6 text-center">
                <img src={myImage} alt="My Image" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Header;