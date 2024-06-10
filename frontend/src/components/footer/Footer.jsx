/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo-new.png"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function Footer() {

    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const year = new Date().getFullYear();

    const { authTokens } = useContext(AuthContext) || {};
    const { newsletter } = useContext(AuthContext) || {};


    useEffect(() => {
        if (authTokens && authTokens.access) {
            try {
                const decoded = jwtDecode(authTokens.access);
                if (decoded.user_id) {
                    setId(decoded.user_id);
                } else {
                    console.log("id not found in the token");
                }
            } catch (error) {
                console.log("Error decoding token:", error);
            }
        }
    }, [authTokens]);

    const handleSubmit = async e => {
        e.preventDefault();
        newsletter(
            id,
            email,
        )
    }

    return (
        <footer id="contact" className="footer-section">
            <div className="footer-container">
                <div className="footer-division">
                    <Link to='/'>
                        <img src={logo1} alt="logo" className="footer-logo" />
                    </Link>
                    <h2 className="company-name">Donor Connect</h2>
                    <p className="company-tagline">
                        &#129656;.......Donate blood.......&#129656;
                        <br />
                        Join the life-saving mission.
                    </p>
                </div>
                <div className="footer-nav-links-container footer-division">
                    <h2>Links</h2>
                    <div className="footer-nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/add-request">Add Request</Link>
                        <Link to="/view-request">View Request</Link>
                        <Link to="/educational-resources">Educational Resources</Link>
                    </div>
                </div>
                <div className="footer-division">
                    <h2 className="subscribe-newsletter">Subscribe to our Newsletter</h2>
                    <form className="newsletter-container" onSubmit={handleSubmit}>
                        <MailOutlineIcon style={{ color: "black" }} />
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email-id..." required />
                        <button type="submit"><ArrowForwardIcon /></button>
                    </form>
                    <div className="social-links-container ">
                        <h2>Social Links</h2>
                        <Link to="mailto:donorconnect001@gmail.com" target="_blank"><EmailIcon /></Link>
                        <Link to="https://www.linkedin.com/in/muskanperween/" target="_blank"><LinkedInIcon /></Link>
                        <Link to="https://github.com/NaimaGulnar/DonorConnectNew" target="_blank"><GitHubIcon /></Link>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright"> Copyright &copy; {year} | DonorConnect | All Rights Reserved.</p>
        </footer >
    )
}

export default Footer