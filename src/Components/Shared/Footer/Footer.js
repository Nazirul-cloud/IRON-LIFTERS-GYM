import React from 'react';
import logo from '../../../Images/icon-3.png';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgPhone, CgMail  } from "react-icons/cg";
import { IoLocationSharp  } from "react-icons/io5";
import { GiMuscleUp } from 'react-icons/gi';
import img from '../../../Images/cta-bg.jpg';

let footerStyle = {
    backgroundImage: `url(${img})`
 }
const Footer = () => {
    return (
        <div className='main-footer ' >
            <div className="footer-middle bg-dark " style={footerStyle}>
            <div className="container text-light p-5" >
                <div className="row">
                      {/* column-1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> <GiMuscleUp/>  IRON LIFTERS</h4>
                        <ul className="list-unstyled">
                            <li>Despite growth of the Internet over the last seven years, the use of toll-free.</li>
                            
                        </ul>
                    </div>
                      {/* column-2 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>OUR PROGRAM</h4>
                        <ul className="list-unstyled">
                            <li>Bodybuilding</li>
                            <li>Gym Fitness</li>
                            <li>Weight Loss</li>
                            <li>Running</li>
                       
                        </ul>
                    </div>
                      {/* column-3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>LATEST NEWS</h4>
                        <ul className="list-unstyled">
                            <li>Iron Gym Blog</li>
                          
                        </ul>
                    </div>
                      {/* column-4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>GET INFO</h4>
                        <ul className="list-unstyled">
                            <li><CgPhone/> : (12) 345 6789</li>
                            <li> <CgMail/> : Iron.info@gmail.com </li>
                            <li><IoLocationSharp/> : DUIP R/A, DHAKA </li>
                        </ul>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="text-center m-4">
                    <h4>FOLLOW US</h4>
                    <BsTwitter/>   <BsGithub/>   <BsFacebook/>   <BsLinkedin/>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-center pb-3">
                    <img className="mx-4" src={logo} width="30"
                        height="25" alt="" /> 
                        &copy;{new Date().getFullYear()} Iron Lifters- All Rights Reserved
                       
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;

