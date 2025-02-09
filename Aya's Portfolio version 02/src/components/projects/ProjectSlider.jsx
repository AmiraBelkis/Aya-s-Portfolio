import { Slider_ } from "../Slider"
import ProjectCard from "./ProjectCard"

const ProjectSlider = () => {
    return (
        <Slider_>
            <ProjectCard header="3D Design / Animation" title="Character Modeling" img="modeling.png" description="3D characters modeling focused on creating detailed,animated and game-ready characters for interactive environments." ></ProjectCard>
            <ProjectCard header="3D Design / Animation" title="Character Modeling 2" img="modeling.png" description="3D characters modeling focused on creating detailed,animated and game-ready characters for interactive environments." ></ProjectCard>
            <ProjectCard header="3D Design / Animation" title="Character Modeling 3" img="modeling.png" description="3D characters modeling focused on creating detailed,animated and game-ready characters for interactive environments." ></ProjectCard>
        </Slider_>
    )
}

export default ProjectSlider