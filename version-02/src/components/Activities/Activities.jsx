import Title from "../Title"
import ActivitiesCard from "./ActivitiesCard"

const Activities = () => {
    return (
        <div id="activities">
            <Title> Activities </Title>
            <div className="d-grid gap-5 activities-grid-template">
                <ActivitiesCard title="Dining Room" img="pressStart.png" description="Redesigned the menu for Dining Room restaurant
Redesigned the menu for Dining Room restaurant"></ActivitiesCard>
                <ActivitiesCard title="Dining Room" img="pressStart.png" description="Redesigned the menu for Dining Room restaurant
Redesigned the menu for Dining Room restaurant"></ActivitiesCard>
                <ActivitiesCard title="Dining Room" img="pressStart.png" description="Redesigned the menu for Dining Room restaurant
Redesigned the menu for Dining Room restaurant"></ActivitiesCard>
            </div>

        </div>
    )
}

export default Activities
