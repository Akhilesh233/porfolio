import AnimatedLetters from '../AnimatedLetters';
import { useState, useCallback, useRef, useEffect } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Constants } from '../../constant';
import pdf from '../../assets/sample-Resume.pdf';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    })

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(Constants.SERVICE_ID, Constants.TEMPLATE_ID, form.current, Constants.PUBLIC_KEY)
          .then(
            () => {
              alert('Message successfully sent')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again!')
            }
          )
    }

    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "0",
                        },
                    },
                    fpsLimit: 80,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "connect",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            connect: {
                                distance: 1000,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1400,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Get in touch".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in exciting opportunities dealing with developments that are ambitious and has the
                        potential to change the space. If you have an offer for me, you can check out my CV <a href={pdf} target='_blank' rel="noreferrer">here</a>.<br />
                        However, if you are looking for a collaboration or want to brainstorm on any mind blowing idea
                        or just want to say Hi &#128075;.<br />Please reach out to my on
                        <a target='_blank' href='https://www.linkedin.com/in/akhilesh-ranjan-756a67186' rel="noreferrer"><b> LinkedIn</b></a>,
                        <a target='_blank' href='https://twitter.com/akhilesh231' rel="noreferrer"><b> Twitter</b></a>.
                        Or just fill in the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input placeholder='Name' type='text' name='name' required />
                                </li>
                                <li className='half'>
                                    <input placeholder='Email' type='email' name='email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* <div className='info-map'>
                    Akhilesh Ranjan Kumar, <br />
                    Bokaro Steel City, Jharkhand <br />
                    <span>akhileshranjan233@gmail.com</span>
                </div> */}
                {/* <div className='map-wrap'>
                    <MapContainer center={Constants.COORDINATES} zoom={13}>
                        <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={Constants.COORDINATES}>
                            <Popup>Akhilesh lives here.</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Contact