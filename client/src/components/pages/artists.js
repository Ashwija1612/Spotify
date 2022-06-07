import React, { useState, useEffect } from 'react';
import Service1 from '../images/slider1.jfif';
import { artistObj } from '../../services/artist';

function Artists() {
    const [allArtist, setAllArtist] = useState([]);

    useEffect(()=>{
        async function getAllArtist(){
            const response = await artistObj.getAllArtist();
            console.log(response);
            setAllArtist(response);
        }
        getAllArtist();
    }, [])
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 ARTISTS</h3>
                        </div>
                        {
                            allArtist.map((artist, index)=>(
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card shadow">
                                        <img src={Service1} className="w-100 border-bottom" alt="..."/>
                                        <div className="card-body">
                                            <h6 className="card-title text-white text-center">{artist.arname}</h6>
                                            <p className="card-text text-white">{artist.dob}</p>
                                            <p className="card-text text-white">{artist.Bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 ARTISTS</h3>
                        </div> */}
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 ARTISTS</h3>
                        </div> */}
                    
                        

                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="services"/>
                                <div className="card-body">
                                    <h6>Services</h6>
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Artists;