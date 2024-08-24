import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import renderProject from '../RenderProject';
// import projectData from '../../data/project.json'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [project, setProject] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getProject();
    }, []);

    const getProject = async () => {
        const querySnapshot = await getDocs(collection(db, 'database'));
        setProject(querySnapshot.docs.map((doc) => doc.data()));
    }

    return (
        <>
            <div className='container project-page'>
                <div className='page-title'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'My Projects'.split("")}
                            idx={15}
                        />
                    </h1>
                    <div>{renderProject(project)}</div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Project