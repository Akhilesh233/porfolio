import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import TagCloud from 'TagCloud';
import pdf from '../../assets/sample-Resume.pdf';

const Skill = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        return () => {
            const container = '.large';
            const texts = [
                'Lambda',
                'HTML',
                'CSS',
                'Sass',
                'JavaScript',
                'React',
                'NodeJS',
                'Git',
                'Bitbucket',
                'TypeScript',
                'Docker',
                'AWS',
                'C++',
                'Python',
                'SQL',
                'CaaS',
                'Saas',
                'Jenkins',
                'Jest',
                'MITRE',
                'Postman',
                'REST API',
                'PHP',
                'Cloud',
                'CI/CD',
                'OOP'
            ];

            const options = {
                radius: 350,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    useEffect(() => {
        return () => {
            const container = '.small';
            const texts = [
                'Lambda',
                'HTML',
                'CSS',
                'Sass',
                'JavaScript',
                'React',
                'NodeJS',
                'Git',
                'Bitbucket',
                'TypeScript',
                'Docker',
                'AWS',
                'C++',
                'Python',
                'SQL',
                'CaaS',
                'Saas',
                'Jenkins',
                'Jest',
                'MITRE',
                'Postman',
                'REST API',
                'PHP',
                'Cloud',
                'CI/CD',
                'OOP'
            ];

            const options = {
                radius: 200,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return  (
        <>
            <div className='container skill-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Skills & Experience'.split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have honed my skills in <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>, <span>Sass</span>,
                        <span> Python</span>, <span>Git</span>, <span>Docker</span>, <span>AWS</span>, <span>React</span>, <span>SQL</span>,
                        <span> NodeJS</span> and many more.
                        I have developed python scripts to <span>optimize</span> the work flow and I have also worked with <span>REST APIs </span>
                        to build Caas-based SaaS connectors for the product. I have also tested products as well.
                    </p>
                    <p>
                        Currently I am researching <span>Cyber Security</span> and different security postures while practicing my skills.
                    </p>
                    <p>
                        Through my experiences and projects, I have learned to write scalable codes and to put extra efforts in optimizing the
                        codebase and to make things user AND developer friendly. I make projects to learn new skills and use skills to make projects.
                        I make sure the projects are the best of the quality and relevant. 
                    </p>
                    <p>
                        Few of my projects are available on my <a target='_blank' href='https://github.com/Akhilesh233' rel="noreferrer">GitHub</a>.
                        Also you can check out my CV <a href={pdf} target='_blank' rel="noreferrer">here</a>, or feel free to visit
                        my <a target='_blank' href='https://www.linkedin.com/in/akhilesh-ranjan-756a67186/' rel="noreferrer">LinkedIn</a> profile
                        for more details.
                    </p>
                </div>

                <div className='text-sphere'>
                    <span className='large'></span>
                    <span className='small'></span>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Skill