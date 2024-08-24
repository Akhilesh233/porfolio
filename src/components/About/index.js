import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faDocker, faGitAlt, faJenkins, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
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
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'About me'.split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I started my tech journey as a front-end Developer and slowly while I was learning and growing my skills,
                        I got to know stuffs about backend and data processing that interests me a lot and led me to backend developments.
                        This portfolio website is itself a living example of my skills that I have used.
                    </p>
                    <p>
                        I am calm, confident, naturally curious and perpetually working hard to hone my skills with one problem at a time.
                    </p>
                    <p>
                        Apart from that, I like playing sports through which I have learned and implemented a lot in my life.
                        I have also wasted a lot of time on video games &#x1F61C;. I am a casual <a target='_blank' href='https://www.goodreads.com/user/show/159320964-akhilesh' rel="noreferrer"><b>book reader</b></a> and I have also written my very own
                        novel which is available on <a target='_blank' href='https://www.amazon.in/Father-Son-Akhilesh-Kumar-ebook/dp/B08BKJTWX2' rel="noreferrer"><b>Amazon</b></a>. 
                    </p>
                    <p>
                        If I need to sum up about myself. In simple words, I am sports fanatic, curious, adventure loving, tech-enthusiast, spiritual and
                        most importantly <span><b>always lively</b></span>.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='stars'></div>
                    <div className='stars2'></div>
                    <div className='stars3'></div>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAws} color="#000" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color="#61DBFB" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color="#ffd700" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faDocker} color=" #0db7ed" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJenkins} color="#967b02" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default About;