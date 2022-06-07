import React, { useState, useEffect } from 'react';
import slider1 from '../images/arrahman.jpg';
import { Link } from 'react-router-dom';
import { songObj } from '../../services/songs';

function Songs() {

    const [allSongs, setAllSongs] = useState([]);

    useEffect(() => {
        async function getSongs() {
            const response = await songObj.getAllSongs();
            console.log(response);
            setAllSongs(response);
        }
        getSongs();
    }, [])

    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">TOP 10 SONGS</h3>
                        </div>
                        {
                            allSongs.map((song, index) => (
                                <div key={index} className="card mb-3 col-md-2 mx-3">
                                    <img src={slider1} className="card-img-left" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-white text-center">{song.name}</h5>
                                        <p className="card-text text-white">{song.dor}</p>
                                        <p className="card-text text-white">Rating: {song.avgrate}</p>
                                        <p className="card-text text-white">{song.artist}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <Link to="/forms" className="btn btn-warning shadow t-">Add More Songs</Link>
                </div>
            </section>
        </div>
    );
}
export default Songs;