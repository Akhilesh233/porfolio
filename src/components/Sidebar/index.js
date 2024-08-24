import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { faBars, faClose, faBriefcase, faGear, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='Akhilesh' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' className='skill-link' to='/skill'>
                    <FontAwesomeIcon icon={faGear} color='#4d4d4e' />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' className='project-link' to='/project'>
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink onClick={() => setShowNav(false)} exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faPhone} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#ffd700' size='3x' className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/akhilesh-ranjan-756a67186'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/akhilesh231'>
                        <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Akhilesh233'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='hamburger-icon' />
        </div>
    )
};

export default Sidebar;