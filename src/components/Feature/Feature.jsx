import React, { useState, useEffect } from 'react';
import './Feature.css';
import { Link, useParams } from "react-router-dom";
import jobData from '../../jobData.json';

const Feature = () => {
    const [numOfCardsToShow, setNumOfCardsToShow] = useState(4);
    const [filteredJobData, setFilteredJobData] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        if (category) {
            setFilteredJobData(jobData.jobs.filter(job => job.category === category));
        } else {
            setFilteredJobData(jobData.jobs);
        }
    }, [category]);

    const showMoreCards = () => {
        setNumOfCardsToShow(6);
    }

    return (
        <div>
            <div className="container mb-5">
                <h3 className="text-center mt-5" id='title'>Featured Jobs</h3>
                <p className="text-center text-secondary mb-5" id='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="row">
                    {filteredJobData.slice(0, numOfCardsToShow).map((card, index) => (
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2" key={index}>
                            <div className="card h-100">
                                <img src={card.companyLogo} className="card-img-top h-25 w-25" alt={`Logo ${index + 1}`} />
                                <div className="card-body">
                                    <h3 className="card-title">{card.jobTitle}</h3>
                                    <p className="card-text">{card.companyName}</p>
                                    <div className="d-flex gap-2">
                                        <button type="button" className="btn btn-primary" id='button1'>{card.remoteOrOnsite}</button>
                                        <button type="button" className="btn btn-primary" id='button2'>{card.fulltimeOrParttime}</button>
                                    </div>
                                    <div className="d-flex gap-3 mt-2">
                                        <p className='location'><img src={card.locationIcon} alt="" />{card.location}</p>
                                        <p className='salary'><img src={card.dolarIcon}  alt="" /> {card.salary}</p>
                                    </div>
                                    <Link to={`/ViewDetails/${card.id}`}>
                                        <button type="button" className="btn btn-info" id="view">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {numOfCardsToShow < filteredJobData.length &&
                    <div className='d-flex justify-content-center mt-4 mb-5'>
                        <button type="button" className="btn btn-info w-25 h-100" id='show' onClick={showMoreCards}>See All Jobs</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Feature;
