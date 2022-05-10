import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <h6>
                <Link to="/faq">FAQ</Link>
            </h6>
            <h6>Contact Us</h6>
        </div>
    );
}

export default Footer;
