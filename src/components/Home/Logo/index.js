import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';
import { DrawSVGPlugin } from 'gsap-trial/all';
import gsap from 'gsap-trial';

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })
        gsap.fromTo(solidLogoRef.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 4,
            duration: 1.4,
        })
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' alt='S' src={LogoS} />
            <svg
                width='690'
                height='700'
                version='1.0'
                viewBox='0 0 690 700'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g className='svg-container'>
                    <path d="M 197,551.5 H 430" />
                    <path d="m 394.526,444.159 -82,-244" />
                    <path d="m 224.69501,50.603699 65,-50.00001398" />
                    <path d="m 401.69199,51.605999 64,-50.0000089" />
                    <path d="m 312.69199,199.606 64,-50" />
                    <path d="m 231.69501,443.604 65,-50" />
                    <path d="m 196.69501,551.604 65,-50" />
                    <path d="m 429.69501,551.604 65,-50" />
                    <path d="m 477.69101,699.60699 64.99997,-51" />
                    <path d="m 624.69501,699.604 65,-50" />
                    <path d="m 147.698,699.60101 66,-50" />
                    <path d="m 0.69514501,699.604 64.99995399,-50" />
                    <path d="m 394.69501,443.604 65,-50" />
                    <path d="M 66,649.5 H 214" />
                    <path d="M 542,649.5 H 690" />
                    <path d="m 289.00299,0.50000799 177,1.00568201" />
                    <path d="M 297,393.5 H 460" />
                    <path d="M 261,501.5 H 494" />
                    <path d="m 376.47601,149.153 -79,245.00002" />
                    <path d="m 376.47299,149.83701 84,244" />
                    <path d="M 289.47299,1.1627001 66.472801,649.16302" />
                    <path d="M 466.47299,0.83752102 689.47302,649.83801" />
                    <path d="m 213.524,649.84601 47.99999,-148" />
                    <path d="m 494.47501,501.84299 48.99997,148.00003" />
                    <path d="m 225.00301,50.5 176.99998,1" />
                    <path d="M 232,443.5 H 395" />
                    <path d="M 1,699.5 H 148" />
                    <path d="m 197.474,551.15997 -50,148" />
                    <path d="m 429.47501,550.84399 49,149" />
                    <path d="M 625,699.5 H 478" />
                    <path d="m 312.47501,200.15601 -80,243" />
                    <path d="M 225.47301,50.163101 1.4726501,699.16302" />
                    <path d="M 402.47299,51.837299 625.47302,699.83698" />
                </g>
            </svg>
        </div>
    )
};

export default Logo;