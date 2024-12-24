import axios from "axios";
import { useEffect, useState } from "react";

const Apis24 = () => {
    const [catsList, setCatsList] = useState([]);

    const myHeaderObject = {
        "x-api-key": "live_neK71zZNwtFlOafaPCxoa7bEWLeTHn8Jm4iqBJ9deZaFf3g3TqaxOr1cyD1GEJps"
    };

    useEffect(() => {

        const getData = async () => {
            const res = await axios.get("https://api.thecatapi.com/v1/images/search?limit=5", {
                headers: myHeaderObject
            });
            console.log(res.data);
            setCatsList(res.data);
        };
        getData();
    }, []);

    const onVoteBtnClicked = async (voteValue, id) => {
        const bodyObject = {
            "image_id": id,
            "value": voteValue
        };

        const res = await axios.post("https://api.thecatapi.com/v1/votes", bodyObject, {
            headers: myHeaderObject
        })
        console.log(res.data);
    };

    return (
        <>
            <h2>API Calls</h2>
            {
                catsList.map(cat => <div key={cat.id}>
                    <img style={{ maxWidth: "500px" }} src={cat.url} alt="Cat" />
                    <br />
                    <button onClick={() => onVoteBtnClicked(1, cat.id)}>Upvote</button>
                    <button onClick={() => onVoteBtnClicked(-1, cat.id)}>Downvote</button>
                </div>
                )
            }
        </>
    );
};

export default Apis24;