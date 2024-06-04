import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates and promotions.</p>
          <form>
            <input type="email" name="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@eduquiz.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 EduQuiz. All rights reserved.</p>
      </div>
      <button id="back-to-top" title="Back to Top">↑</button>
    </footer>
  );
};

export default Footer;
