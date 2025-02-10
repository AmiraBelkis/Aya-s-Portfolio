import Title from "../Title"
import ActivitiesCard from "./ActivitiesCard"
import activitiesData from "../../assets/activities/activities.json"


const Activities = () => {
    return (
        <div id="activities">
            <Title> Activities </Title>
            <div className="d-grid gap-5 activities-grid-template">
                {
                    Object.entries(activitiesData).map((activities, index) => {
                        const activity = activities[1];
                        return (
                            <ActivitiesCard
                                key={index}
                                img={activity.img}
                                title={activity.title}
                                description={activity.description}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Activities
