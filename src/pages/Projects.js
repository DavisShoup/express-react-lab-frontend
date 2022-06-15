import { useState, useEffect } from "react";

const Projects = (props) => {
    const [ projects, setProjects ] = useState(null);
    const getProjectsData = async () => {
        const response = await fetch(props.URL + "projects");
        const data = await response.json();
        setProjects(data);
    };
    useEffect(() => {
    getProjectsData();
    });

    const loaded = () => {
        console.log(projects)
        return projects.map(project => (
            <div>
                <h1>{project.name}</h1>
                <img className="project-image" src={project.image} alt={project.name}/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live site</button>
                </a>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return projects ? loaded() : loading();

}

export default Projects;