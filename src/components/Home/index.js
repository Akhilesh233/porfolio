import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Typewriter from 'typewriter-effect';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    })

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={'Hi, '.split("")}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={"I'm".split("")}
                        idx={18}
                    />
                    <img src={LogoTitle} alt='A' />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={'khilesh  Ranjan'.split("")}
                        idx={21}
                    />
                    </h1>
                    <h2>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    'A Software Developer',
                                    'A Front-end Developer',
                                    'A Cyber Security Researcher',
                                ],
                            }}
                        />
                    </h2>
                    <Link to='/about' className='flat-button'>ABOUT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home;