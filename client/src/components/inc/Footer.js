import React from 'react';
import {Link} from 'react-router-dom';


function Footer(){
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6> Company Information</h6>
                        <hr/>
                        <p className="text-white">
                            agsuadiwnsdnwhbjhdjsnkxskncsdcbdhcnkdjc bceiunkemcmsokded iucidnsckmsdkcms
                            hbnkdmsijei nceiununixskalksm ijeijdewmdioejiuwiurw ineiuwuiewfuienfencw infcifewn
                            nsdhcbshdbcshbs ndsncsndcmsksdhsbjsd ndcdsncdsnsu
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#64, Bangalore Karnataka India</p></div>
                        <div><p className="text-white mb-1">+91 8xxxxxxxx</p></div>
                        <div><p className="text-white mb-1">+91 8xxxxxxxx</p></div>
                        <div><p className="text-white mb-1">email@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;