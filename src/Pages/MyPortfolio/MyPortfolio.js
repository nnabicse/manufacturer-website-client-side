import React from 'react';
import devImage from '../../images/aboutimage.png'
import tailwind from '../../images/tailwind.jpg'
import bootstrap from '../../images/bootstrap.jpg'
import js from '../../images/js.jpg'
import react from '../../images/react.jpg'
import mongo from '../../images/mdb.jpg'
import node from '../../images/node.jpg'
import './MyPortfolio.css'
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='portfolio-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Developer Portfolio</h1>
            </div>
            <div className='dev-details-container'>
                <div className='dev-banner'>
                    <div className='dev-image-container'>
                        <img className='dev-image img-fluid' src={devImage} alt="" />
                    </div>
                    <div className='dev-detail-education-container'>
                        <div className='dev-name-title-container'>
                            <h3 className='dev-name title'>Nurun Nabi</h3>
                            <span className='dev-title'>Computer Scientist, Web Developer</span><br />
                            <p>nnabi.cse@gmail.com</p>
                        </div>
                        <div className='dev-education-container'>
                            <p>
                                <span className='degree title'>Master of Science</span><br />
                                <span>Computer Science & Engineering</span><br />
                                <span>East West University, Dhaka Bangladesh</span>
                            </p>
                            <p>
                                <span className='degree title'>Bachelor of Science</span><br />
                                <span>Computer Science & Engineering</span><br />
                                <span>East Delta University, CTG Bangladesh</span>
                            </p>
                            <p>
                                <span className='degree title'>Diploma in Engineering</span><br />
                                <span>Computer Science & Technology</span><br />
                                <span>Chittagong Polytechinc Inst., CTG Bangladesh</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='section-header-container'>
                        <h2>Experties</h2>

                    </div>
                    <div className='experties-container'>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={js} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>JavaScript</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={react} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>React JS</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={mongo} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>Mongo DB</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={node} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>Node JS</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={bootstrap} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>Bootstrap CSS</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='experties'>
                            <div className='experties-image-container'>
                                <img className='experties-image img-fluid' src={tailwind} alt="" />
                            </div>
                            <div className='experties-detail-container'>
                                <h3 className='experties-name'>Tailwind CSS</h3>
                                <p className='experties-level'>
                                    <span className="font-medium">
                                        Level:
                                        <Rating
                                            className="ml-2"
                                            initialRating={4}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(147 197 253)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    style={{ color: "rgb(37 99 235)" }}
                                                    icon={faStar}
                                                />
                                            }
                                            readonly
                                        ></Rating>{" "}
                                    </span>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='projects-container'>
                    <div className='section-header-container'>
                        <h2>Projects</h2>
                    </div>
                    <div className='all-projects-items-container'>
                        <div className='text-center mb-4'>
                            <h4 className='title'>Full Stack Projects</h4>
                        </div>
                        <div className='all-projects-container'>
                            <div className='project'>
                                <h5 className='title'>NNabi Printing Parts Manufacturer Ltd.</h5>
                                <span>React JS, JavaScript, React Bootstrap, Firebase, MongoDb, Node, Express</span><br />
                                <div className='project-button-container'>
                                    <a href='nnabippml.firebaseapp.com' className='btn btn-primary w-100'>Live</a>
                                    <button className='btn btn-primary w-100'>Github</button>
                                </div>
                            </div>
                            <div className='project'>
                                <h5 className='title'>Independent Data Scientist</h5>
                                <span>React JS, JavaScript, React Bootstrap, Firebase, HTML, CSS</span><br />
                                <div className='project-button-container'>
                                    <a href='https://independent-data-scientist.firebaseapp.com/' className='btn btn-primary w-100'>Live</a>
                                    <button className='btn btn-primary w-100'>Github</button>
                                </div>
                            </div>
                            <div className='project'>
                                <h5 className='title'>NNabi Warehouse</h5>
                                <span>React JS, JavaScript, React Bootstrap, Firebase, MongoDb, Node, Express</span><br />
                                <div className='project-button-container'>
                                    <a className='btn btn-primary w-100' href="https://nnabi-warehouse.firebaseapp.com/">Live</a>
                                    <button className='btn btn-primary w-100'>Github</button>
                                </div>
                            </div>
                            <div className='project'>
                                <h5 className='title'>Eye Frame - A simple ecommerce to buy eye frames</h5>
                                <span>JavaScript, Bootstrap, Netlify, HTML, CSS</span><br />
                                <div className='project-button-container'>
                                    <a className='btn btn-primary w-100' href="https://eyeframe.netlify.app/">Live</a>
                                    <button className='btn btn-primary w-100'>Github</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;