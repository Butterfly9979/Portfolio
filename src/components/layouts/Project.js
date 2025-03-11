import React from 'react'

const Project = ({ id, name, url, skills, img }) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>
                    <img src={`Img/${img}`} alt='' className='w-100 h-100' />
                </a>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            {skills && <h3>{skills.map(skill => skill)}</h3>}
        </div >
    )
}

export default Project
