import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
                <footer  className="footer bg-dark py-3">
                    <div  className="container">
                        <div  className="row details-container">
                        <div  className="col-md-6 col-lg detail">
                            <h3  className="brand-title text-white">WayOffCareer</h3>
                            <p className="skill-description text-white">Are you ready to take the next step in your career?</p>
                            
                        </div>
                        <div className="col-md-6 col-lg detail">
                            <h5 className='link-title'>Company</h5>
                            <a href="#">About Us</a><br />
                            <a href="#">Work</a><br />
                            <a href="#">Latest News</a><br />
                            <a href="#">Careers</a>
                        </div>
                        <div className="col-md-6 col-lg detail">
                            <h5 className='link-title'>Product</h5>
                            <a href="#">Prototype</a><br />
                            <a href="#">Plans & Pricing</a><br />
                            <a href="#">Customers</a><br />
                            <a href="#">Integrations</a>
                        </div>
                        <div className="col-md-6 col-lg detail">
                            <h5 className='link-title'>Support</h5>
                            <a href="#">Help Desk</a><br />
                            <a href="#">Sales</a><br />
                            <a href="#">Become a Partner</a><br />
                            <a href="#">Developers</a>
                        </div>
                       <div className="col-md-6 col-lg detail">
                            <h5 className='link-title'>Contact</h5>
                            <p className='adress'>524 Broadway , NYC</p>
                            <p className='adress'>+1 777 - 978 - 5570</p>
                           
                        </div>
                        <hr id='hr' />
                        
                        <div className='d-flex justify-content-between'>
                            <p className='copyright'>@2023 CareerHub. All Rights Reserved</p>
                            <p className='copyright'>Powered by CareerHub</p>
                        </div>
                    </div>
                    
                   
                    </div>
        </footer>

        </div>
    );
};

export default Footer;