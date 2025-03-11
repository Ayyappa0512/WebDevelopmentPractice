import React from "react";

function Footer(){
    return(
        <div className = "footer" >
            <footer>
                <div className="footerlogo">
                    <img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg" alt="footer image" />
                </div>
                <div>
                    <ul>
                        <li>Register Live, Push or Move</li>
                        <li>About Ableton</li>
                        <li>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li>Offers for students and teachers</li>
                        <li>Ableton for the Classroom</li>
                        <li>Ableton for Colleges and Universities</li>
                    </ul>
                </div>
                <div>
                    <span>Sign up to our newsletter</span>
                    <span>
                Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
              </span>
                    <div>
                        <input type="text" placeholder="Enter the email"></input>
                        <button type="button">Sign up</button>
                    </div>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li>Find Ableton User Groups</li>
                        <li>Find Certified Training</li>
                        <li>Become a Certified Trainer</li>
                    </ul>
                </div>
                <div>
                    <h3>Language and Location</h3>
                    <select type="dropdown"></select>
                    <select type="dropdown"></select>
                </div>
                <div>
                    <a href="">Contact Us</a>
                    <a href="">Press Resources</a>
                    <a href="">Legal Info</a>
                    <a href="">Coreporate Information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookies settings</a>
                    <a href="">Imprint</a>
                </div>
                <div>
                    <span>Made in Berlin</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;