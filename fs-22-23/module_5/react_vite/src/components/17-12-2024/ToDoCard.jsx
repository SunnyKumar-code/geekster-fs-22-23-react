const ToDoCard = (props) => {
    return (
        <div style={{
            border: "2px solid gray",
            margin: "1 rem"
        }}>
            {
                props.completed ?
                    <img
                        width={"20"}
                        height={"20"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCI7tzbS9nILfPvfGtCbIa6_zdhJTdOHJ3DA&s" />
                    :
                    <img
                        width={"20"}
                        height={"20"}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHYhA7MugMsLShhbmdAYzSXONBWqK1G-LZQ&s" />
            }

            <span style={{
                textDecoration: props.completed ? "line-through" : ""
            }}>{props.title}</span>
            <button
                onClick={() => {
                    props.onCompleted(props.id)
                }}
            >
                Mark Completed
            </button>
        </div>
    )
};

export default ToDoCard;