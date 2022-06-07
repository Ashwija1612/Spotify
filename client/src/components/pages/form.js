import React from 'react';

function Form() {

    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="cardcontact">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8 text-white">
                                        <h6>Songs Addition Form</h6>
                                        <hr/>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Song Name</label>
                                            <input type="text" className="form-control" placeholder="Enter song name"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Date of Release</label>
                                            <input type="date" className="form-control" placeholder="Enter the date of release"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Average Rating</label>
                                            <input type="int" className="form-control" placeholder="Enter the rating"/>
                                        </div>
                                        <div className="form-group text-white">
                                            <label className="mb-1">Artist's Name</label>
                                            <input type="text" className="form-control" placeholder="Enter artist name"/>
                                        </div>
                                            <div className="form-group py-3 text-white">
                                                <button type="button" className="btn btn-primary shadow w-100">Save data</button>
                                            </div>
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

export default Form;