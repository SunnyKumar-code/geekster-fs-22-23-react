import { useState } from "react";

import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import restaurantsList from "../../static/dataset";

import styles from "./RestaurantsList.module.css";

const RestaurantsList = () => {

    const [searchKey, setSearchKey] = useState("");
    const [minRating, setMinRating] = useState(0);

    const onSearchKeyChange = (e) => {
        // console.log(e.target.value);
        setSearchKey(e.target.value);
    };

    const onRatingsChange = (e) => {
        // console.log(typeof e.target.value);
        setMinRating(Number(e.target.value));
    };

    const restaurantFilterFn = (restaurant) => {
        // console.log("name", searchKey)
        // console.log("rating", minRating)
        return (
            (restaurant.name.toLowerCase().includes(searchKey.toLowerCase())
                || restaurant.address.toLowerCase().includes(searchKey.toLowerCase()))
            && restaurant.rating >= minRating)
    };

    const restaurantMapFn = (restaurant) => <RestaurantCard key={restaurant._id} {...restaurant} />;

    return (
        <div >
            <form className={styles["filter-form"]}>
                <div>
                    <input onChange={onSearchKeyChange} type="text" placeholder="Search restaurants.." />
                </div>
                <div>
                    <label htmlFor="minRating">Minimum Rating</label>
                    <input onChange={onRatingsChange} type="number" id="minRating" />
                </div>
            </form>
            <div className={styles.container}>
                {
                    restaurantsList
                        .filter(restaurantFilterFn)
                        // .slice() // Page 1 => 1-20, Page 2 => 21-40
                        .map(restaurantMapFn)
                }
            </div>
            {/* PAGINATION WILL BE PLACED HERE */}
        </div>
    )
};

export default RestaurantsList;