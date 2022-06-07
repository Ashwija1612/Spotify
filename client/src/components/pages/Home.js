import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import Service1 from '../images/slider1.jfif';
import slider1 from '../images/arrahman.jpg';

function Home() {
    return (
        <div>
            <Slider />
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 SONGS</h3>
                        </div>
                        <div className="card mb-3 col-md-2 mx-3">
                            <img src={slider1} className="card-img-left" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted text-white">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card mb-3 col-md-2 mx-3">
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-white"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img src={slider1} className="card-img-bottom" alt="..."/>
                        </div>
                        <div className="card mb-3 col-md-2 mx-3">
                            <img src={slider1} className="card-img-left" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-white"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>  
                        <div className="card mb-3 col-md-2 mx-3">
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-white"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img src={slider1} className="card-img-bottom" alt="..."/>
                        </div> 
                        <div className="card mb-3 col-md-2 mx-3">
                            <img src={slider1}className="card-img-left" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">Card title</h5>
                                <p className="card-text text-white">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text text-white"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div> 
                        <div className="col-md-12 text-center">
                            <Link to="/songs" className="btn btn-warning shadow t-">Load More</Link>
                        </div>                      
                    </div>
                </div>
            </section>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 ARTISTS</h3>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3 shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body text-white">
                                    <h6>Services</h6>
                                    <p className="text-white">
                                        Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3 shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body text-white">
                                    <h6>Services</h6>
                                    <p className="text-white">
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3 shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body text-white">
                                    <h6>Services</h6>
                                    <p className="text-white">
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mb-4"> 
                            <Link to="/artists" className="btn btn-warning shadow t-">Load More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;