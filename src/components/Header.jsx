import { Form } from 'react-bootstrap';
import kubernetes from '../kubernetes.svg'

const Header = ({ isDarkMode, toggleDarkMode }) => (
    <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <img className="kubernetes-logo" src={kubernetes} />
                <span className="fs-4 ubuntu">Cards Against Kubernetes</span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto align-items-center">
                <a className="me-3 py-2 text-dark text-decoration-none" href="#">DEMO</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">KCNA</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">KCSA</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKAD</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKA</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKS</a>

               <Form.Check 
                    type="switch"
                    id="dark-mode-switch"
                    label=""
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
            </nav>
        </div>
    </header >
);

export default Header