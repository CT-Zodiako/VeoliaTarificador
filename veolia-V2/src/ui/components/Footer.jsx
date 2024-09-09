// Footer.js
import './footerStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
    return (
        <footer className="footer d-flex align-items-center justify-content-center" style={{ height: '5rem'}}>
            <div style={{height:'3rem', textAlign: 'center', fontSize: '12px'}}>
                <img src="../assets/Veolia_sml.png" className="img-fluid footer-image" alt="VEO REGULADOR" />
                <p>version 2.0.0</p>
            </div>
        </footer>
    );
};


