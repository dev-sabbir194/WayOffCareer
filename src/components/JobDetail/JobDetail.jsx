import React, { useState, useEffect } from 'react';
import locationIcon from '../../assets/Icons/Location Icon.png';
import bgImg from '../../assets/All Images/Vector.png';
import './JobDetail.css';
import jobData from '../../jobData.json';
import bgImage from '../../assets/All Images/Vector-1.png'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    const selectedJob = jobData.jobs.find(job => job.id === parseInt(id));
    setJob(selectedJob);
  }, [id]);



const handleApplyNowClick = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
  const selectedJobIndex = appliedJobs.findIndex(jobDataObj => jobDataObj.id === job.id);
  if (selectedJobIndex !== -1) {
    // job already applied for
    setIsApplied(true);
    toast.error('You have already applied for this job.');
  } else {
    // add new job data if not applied before
    const jobDataObj = { id: job.id, data: job };
    appliedJobs.push(jobDataObj);
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
    setIsApplied(true);
    toast.success('You have successfully applied for this job!');
  }
}



  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='header-container mb-5'>
          <div className="d-flex align-items-center gap-5 ">
          <img src={bgImg} alt="" className="img-fluid" style={{ maxWidth: '300px', width: '150px', height: '150px' }} />
          <img className='mt-5'  src={bgImage} alt="" style={{ position: 'absolute', top: 0, right: 0, maxWidth: '300px', width: '150px', height: '150px'}} />
        </div>
          <h3 className="text-center " id="job">Job Details
          </h3>
      </div>   

      <div className="container mb-5">
        <div className="row mb-5=" id='container'>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2 ">
            <div className="card h-100">
              <h3>Description:</h3>
                <p>{job.jobDescription}</p>
                <h3>Job Responsibility:</h3>
                <p>{job.jobResponsibility}</p>
                <h3>Educational Requirements:</h3>
                <p>{job.educationalRequirements}</p>
                <h3>Experiences:</h3>
               <p>{job.experiences}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2">
            <div className="card h-100" id='card'>
             <h3>Job Details</h3>
                <hr />
                <p>
                  <h4>
                    <img src={job.dolarIcon} alt="dolarIcon" /> Salary :
                    {job.salary}
                  </h4>
                </p>
                <p>
                  <h4>
                    <img src={job.jobIcon} alt="jobIcon" /> Job Title:
                    {job.jobTitle}
                  </h4>
                </p>
                <h3>Contact Information</h3>
                <hr />
                <p>
                  <h4>
                    <img src={job.phoneIcon} alt="phoneIcon" /> Phone:
                    {job.contactInformation.phone}
                  </h4>
                </p>
                <p>
                  <h4>
                    <img src={job.emailIcon} alt="emailIcon" /> Email:
                    {job.contactInformation.email}
                  </h4>
                </p>
                <p>
                  <h4>
                    <img src={job.locationIcon} alt="locationIcon" /> Address:
                    {job.location}
                  </h4>
                </p>
                        
    
                        <button type="button" className="btn btn-info w-100" id="view" onClick={handleApplyNowClick}>
                          Apply Now
                        </button>
            


                                      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
