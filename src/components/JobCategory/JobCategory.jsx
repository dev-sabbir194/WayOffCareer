import React from 'react';
import './JobCategory.css';
import data from '../../data.json';

const JobCategory = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center mt-5" id="title"> Job Category</h3>
        <div className="row jobs-container mt-5">
          {data.categories.map((category) => (
            <div key={category.id} className="col-md-6 col-lg skill mt-2 ms-2">
              <img className='mt-3 mb-5' src={category.logo} alt="" />
              <h5 className="job-title text-white">{category.name}</h5>
              <p className="job-description text-white">{category.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
