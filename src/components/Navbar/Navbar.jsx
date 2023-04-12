import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
 
  <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
  <div className="container-fluid">
    <h2 className="navbar-brand">WayOffCareer</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/Statistics">Statistics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/AppliedJobs">Applied Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Blog">Blog</a>
        </li>
        
      </ul>
    </div>
    <div className="d-flex justify-content-end">
      <button className="btn btn-primary" id='button' type="button">Star Applying</button>
    </div>
  </div>
  </nav>
  
        </div>
    );
};

export default Navbar;