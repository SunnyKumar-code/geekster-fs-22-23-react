import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import restaurantsList from "../../static/dataset";

import styles from "./RestaurantsList.module.css";

const RestaurantsList = () => {
    return (
        <div className={styles.container}>
            {
                restaurantsList.map((restaurant) => <RestaurantCard key={restaurant._id} {...restaurant} />)
            }

        </div>
    )
};

export default RestaurantsList;