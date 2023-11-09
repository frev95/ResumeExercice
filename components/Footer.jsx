import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer id="footer">
            <div class="container">
                <h3>Brandon Johnson</h3>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div class="social-links">
                    <Link to="#" class="twitter"><i class="bx bxl-twitter"></i></Link>
                    <Link to="#" class="facebook"><i class="bx bxl-facebook"></i></Link>
                    <Link to="#" class="instagram"><i class="bx bxl-instagram"></i></Link>
                    <Link to="#" class="google-plus"><i class="bx bxl-skype"></i></Link>
                    <Link to="#" class="linkedin"><i class="bx bxl-linkedin"></i></Link>
                </div>
                <div class="copyright">
                    &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                </div>
            </div>
        </footer>
    )
}
