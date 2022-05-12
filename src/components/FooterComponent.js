import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <h6>
                <Link to="/faq">FAQ</Link>
            </h6>
            <h6>
                <a href="https://www.linkedin.com/in/melyssa-marlowe-8798a0211/">
                    LinkedIn
                </a>
            </h6>
            <h6>
                <a href="https://github.com/mgmarlowe/FreeTime">GitHub</a>
            </h6>
            <h6>
                <a href="https://mgmarlowe.github.io/">Creator's Page</a>
            </h6>
        </div>
    );
}

export default Footer;
