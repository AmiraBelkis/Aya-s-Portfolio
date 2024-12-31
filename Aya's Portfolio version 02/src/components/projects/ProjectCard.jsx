import { projectsAssetsLocation } from "../../utils/constants"

const ProjectCard = ({ header, title, img, description }) => {
    return (
        <div className="card-project">
            <div className="card-header">
                <h1>{header}</h1>
            </div>
            <div className="card-body">
                <h3 className="w-100"> <span className="text-primary"> - </span> {title}</h3>
                <img className="w-75" src={`${projectsAssetsLocation}/images/${img}`} alt="Project image" />
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard