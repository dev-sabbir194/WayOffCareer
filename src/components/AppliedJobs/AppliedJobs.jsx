import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AppliedJobs.css'

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const appliedJobsArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('appliedJobs')) {
        const jobData = JSON.parse(localStorage.getItem(key));
        appliedJobsArray.push(jobData);
      }
    }
    
    setAppliedJobs(appliedJobsArray);
  }, []);


  
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {appliedJobs.map((data, index) => (
          <div className='col-lg-6 col-md-8 col-sm-10' id='job-c' key={index}>
            <div className='review-item'>
              <div className='d-flex'>
                <img className='img-style' src={data[index].data.companyLogo} alt={data[index].data.companyName} />
                <div className='review-details d-flex'>
                  <div>
                    <p className='product-title'>{data[index].data.jobTitle}</p>
                    <p className='company-Name'>{data[index].data.companyName}</p>
                    <div className='d-flex gap-2 ms-1 mt-2'>
                      <button type='button' className='btn btn-primary' id='button1'>
                        {data[index].data.fulltimeOrParttime}
                      </button>
                      <button type='button' className='btn btn-primary' id='button2'>
                        {data[index].data.remoteOrOnsite}
                      </button>
                    </div>
                    <div className='d-flex gap-3 mt-3'>
                      <p className='location '>
                        <img src={data[index].data.locationIcon} alt='Location' />
                        {data[index].data.location}
                      </p>
                      <p className='salary'>
                        <img src={data[index].data.dolarIcon} alt='Salary' />
                        {data[index].data.salary}
                      </p>
                    </div>
                  </div>
                  <div className='mt-5'>
                    <Link to={`/ViewDetails/${data[index].data.id}`}>
                      <button type='button' className='btn btn-info' id='view'>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
