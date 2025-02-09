import { Slider_ } from "../Slider"
import ProjectCard from "./ProjectCard"

const ProjectSlider = ({ projectType, projects }) => {
    return (
        <Slider_>
            {
                projects.map((project, index) => (
                    <ProjectCard key={index} header={projectType} title={project["title"]} img={project["img"]} description={project["description"]} ></ProjectCard>
                ))
            }
        </Slider_>
    )
}

export default ProjectSlider