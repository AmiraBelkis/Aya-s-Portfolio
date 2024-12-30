import Title from "../Title"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
    return (
        <div id="projects">
            <Title>
                Projects
            </Title>
            <ProjectsCard header="3D Design / Animation" title="Character Modeling" img="modeling.png" description="3D characters modeling focused on creating detailed,animated and game-ready characters for interactive environments." ></ProjectsCard>
            <ProjectsCard header="UI/ UX Design" title="Baridi Trust" img="baridiTrust.png" description="Designed the UI for Baridi Trust, an escrow service payment extension, created during the Algérie Post hackathon Innovpost, where we secured first place." ></ProjectsCard>
            <ProjectsCard header="Graphic Design" title="Dining Room" img="diningRoom.png" description="Redesigned the menu for Dining Room restaurant as a freelance project, focusing on modernizing the aesthetic and enhancing readability." ></ProjectsCard>
        </div>
    )
}

export default Projects