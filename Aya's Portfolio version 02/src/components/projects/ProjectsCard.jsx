const ProjectsCard = ({ header, title, img, description }) => {
    return (
        <div className="card-project">
            <div className="card-header">
                <h1>{header}</h1>
            </div>
            <div className="card-body">
                <h3 className="w-100"> <span className="text-primary"> - </span> {title}</h3>
                <img className="w-75" src={`/src/assets/${img}`} alt="Project image" />
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCard