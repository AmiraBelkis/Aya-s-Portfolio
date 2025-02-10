import { activitiesAssetsLocation } from "../../utils/constants"

const ActivitiesCard = ({ img, title, description }) => {
    return (
        <div className="card-custom m-2">
            <div className="card-body">
                <img className="w-25" src={`${activitiesAssetsLocation}/images/${img}`} alt={`Activity -${title}`} />
                <h1 className="w-100"> {title} </h1>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}

export default ActivitiesCard
