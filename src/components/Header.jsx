import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import kubernetes from '../kubernetes.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, toggleDarkMode, handleDeckChange, currentDeck }) => (
    <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <img className="kubernetes-logo" src={kubernetes} />
                <span className="fs-4 ubuntu">Cards Against Kubernetes</span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto align-items-center">
                <a className={`me-3 py-2 text-dark text-decoration-none ${currentDeck === 'KCNA' ? 'fw-bold' : ''}`} href="#" onClick={() => handleDeckChange('KCNA')}>KCNA</a>
                <a className={`me-3 py-2 text-dark text-decoration-none ${currentDeck === 'KCSA' ? 'fw-bold' : ''}`} href="#" onClick={() => handleDeckChange('KCSA')}>KCSA</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKAD</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKA</a>
                <a className="me-3 py-2 text-dark text-decoration-none text-muted disabled-link">CKS</a>
                
                <Dropdown align="end">
                    <Dropdown.Toggle as="a" className="navbar-icon-toggle">
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="px-3 py-1">
                            <Form.Check 
                                type="switch"
                                id="dark-mode-switch"
                                label="Dark Mode"
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                            />
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </div>
    </header >
);

export default Header;