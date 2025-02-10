import { activitiesAssetsLocation } from "../../utils/constants"

const ActivitiesCard = ({ img, title, description }) => {
    return (
        <div className="card-custom m-2">
            <div className="card-body gap-1">
                <img className="w-25 rounded-circle" src={`${activitiesAssetsLocation}/images/${img}`} alt={`Activity -${title}`} />
                <h1 className="w-100"> {title} </h1>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default ActivitiesCard
