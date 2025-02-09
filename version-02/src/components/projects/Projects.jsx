import Title from "../Title"
import ProjectSlider from "./ProjectSlider"
import projectsData from "../../assets/projects/projects.json"

const Projects = () => {
    return (
        <div id="projects">
            <Title>
                Projects
            </Title>
            {
                Object.entries(projectsData).map(([projectType, projects]) => (
                    <ProjectSlider
                        key={projectType}
                        projectType={projectType}
                        projects={projects}
                    />
                ))
            }
        </div>
    )
}

export default Projects