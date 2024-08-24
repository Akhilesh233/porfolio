// import projectData from '../../data/project.json';
import './index.scss';

const renderProject = (project) => {
    return (
        <div className='images-container'>
            {
                project.map((project, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img className='project-image' src={project.image} alt='project' />
                            <div className='content'>
                                <p className='title'>{project.title}</p>
                                <h4 className='description'>{project.description}</h4>
                                <button className='btn' onClick={() => window.open(`https://${project.url}`)}>VIEW</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default renderProject