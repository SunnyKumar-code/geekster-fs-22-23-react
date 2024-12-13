import Card from "./Card/Card";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Footer from "./Footer/Footer";

const feeds = [
    {
        title: "Summer holidays",
        imageUrl: "https://infinitylearn.com/surge/wp-content/uploads/2024/06/Summer-Holidays-2024-copy.jpg",
        description: "Best summer holidays in last decade",
        likes: 500,
        comments: [
            "Nice picture",
            "I miss this place",
            "You guys had fun!"
        ]
    },
    {
        title: "Winter holidays",
        imageUrl: "https://sitspa.com/wp-content/uploads//Vacanze-invernali-24-1024x1024.jpg",
        description: "Best winter holidays in last decade",
        likes: 123,
        comments: [
            "Nice picture",
            "I miss this place",
            "You guys had fun!"
        ]
    },
    {
        title: "Weekend Road Trip",
        imageUrl: "https://sitspa.com/wp-content/uploads//Vacanze-invernali-24-1024x1024.jpg",
        description: "Bumpy ride this weekend",
        likes: 345,
        comments: [
            "Nice picture",
            "I miss this place",
            "You guys had fun!"
        ]
    },
]

const MyComponent = () => {
    return (
        <>
            <h3>This is my component</h3>

            {
                feeds.map((feed, index) => {
                    // return <Card title={feed.title} imageUrl={feed.imageUrl} description={feed.description} likes={feed.likes} comments={feed.comments} />
                    return <Card {...feed} />
                })
            }

            {/* <Card
                title={"Summer holidays"}
                imageUrl={"https://infinitylearn.com/surge/wp-content/uploads/2024/06/Summer-Holidays-2024-copy.jpg"}
                description={"Best summer holidays in last decade"}
                likes={450}
                comments={[
                    "Nice picture",
                    "I miss this place",
                    "You guys had fun!"
                ]}
            />

            <Card
                title={"Winter Holidays"}
                imageUrl={"https://sitspa.com/wp-content/uploads//Vacanze-invernali-24-1024x1024.jpg"}
                description={"The snow was unforgottable"}
                likes={125}
                comments={[
                    "Nice picture",
                    "I miss this place",
                    "Too good, awesome!!"
                ]}
            /> */}
            {/* <Child2 />
            <Footer />
            <Child1 /> */}
        </>
    )
};

export default MyComponent;