import React from 'react';
import slider1 from '../images/arrahman.jpg';


function Slider(){
    return (
        <div className="rows">
            <div className="col-md-12">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                                <h2 className="font-weight-bold">Magic of the Music</h2>
                                <h4 className="text-white">"If music wakes you up, makes you think, heals you... then, I guess the music is working."</h4>
                                <h6 className="text-white">A.R Rahman</h6>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={slider1} className="d-block w-100 h-2" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="font-weight-bold">Only nightingale of India</h2>
                            <h4 className="text-white">"Kuch pa kar khona hai, Kuch kho kar pana hai, Jeevan ka matlab toh Aana aur jaana hain..."</h4>
                            <h6 className="text-white">Lata Mangeshkar</h6>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={slider1} className="d-block w-100 h-2" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="font-weight-bold">Melody of present generation</h2>
                            <h4 className="text-white">"Music can make you cry without physical touch. So don't underestimate the power of music"</h4>
                            <h6 className="text-white">Arijit Singh</h6>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Slider;