import React from 'react';

function About() {
    return (
        <div>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <h4>About Us</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <p className="text-white">
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
            </section>

            {/*Our Vision, Mission and Value*/}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Vison, Mission and Values</h3>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <h6>Our Vision</h6>
                            <p className="text-white">
                                Lorem Ipsum is simply dummy text of the printing and  
                            </p>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <h6>Our Mision</h6>
                            <p className="text-white">
                                Lorem Ipsum is simply dummy text of the printing and  
                            </p>
                        </div>
                        <div className="col-md-4 text-center text-white">
                            <h6>Our Values</h6>
                            <p className="text-white">
                                Lorem Ipsum is simply dummy text of the printing and  
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;