import React from "react";
import "./About.css"

function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 mt-5">
                        <h2 className="text-center">About Me</h2>
                        <hr />
                        <div className="transparentBox rounded">
                            <p className="text-center">
                                My name is Nathaniel Darnell and I am an aspiring Web Developer. I am currently learning Full Stack Web
                                Development mostly as a hobby. However, I also want to become more versatile in the workforce in hopes of
                                diversifying my income. I am from Yuma, Arizona and have lived in Chandler, Arizona for 7 years. Join me in
                                my journey!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 mt-5 text-center">
                        <img src="../../../public/assets/Images/TTNHAEWTC-UTW5T06F3-15d9aca06426-512.png" className="profpic img-fluid rounded-circle" alt="..."></img>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-8 mt-5">
                        <div class="text-center">
                            <img class="icons img-fluid rounded-circle" src="Assets/Images/in_image2.png" alt="..." onClick="linkedIn()"></img>
                            <img class="icons img-fluid rounded-circle" src="Assets/Images/GitHub-Mark.png" alt="..." onClick="github()"></img>
                            <a href="Assets/Nathaniel_Darnell_Resume.pdf" target="_blank">
                                <img class="icons img-fluid rounded-circle" src="./Assets/Images/resumepic.jpg" alt="..."></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;