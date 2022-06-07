import React from 'react';

function Contactus() {

    return (
        <div>
            <section className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cardcontact">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 text-white">
                                        <h6> Contact  Form</h6>
                                        <hr/>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Phone Number</label>
                                            <input type="text" className="form-control" placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Address</label>
                                            <input type="text"className="form-control" placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Message</label>
                                            <textarea rows="3"  className="form-control" placeholder="Type the message"></textarea>
                                        </div>
                                        <div className="form-group py-3 text-white">
                                            <button type="button" className="btn btn-primary shadow w-100" >Send Message</button>
                                        </div>

                                    </div>
                                    <div className="col-md-6 border-start text-white">
                                        <h5 className="main-heading text-white">Address Information</h5>
                                        <p className="text-white">
                                            #xxx, Byrathi, Bangalore, Karnataka -56982, India
                                        </p>
                                        <p className="text-white">
                                            +91 8xxxxxxxxxxx
                                        </p>
                                        <p className="text-white">
                                            Email: email@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contactus;