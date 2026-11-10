import { useState } from "react"

export default function LikeButton() {

    let [isLike, setisLike] = useState(false);

     let [click, setClick] = useState(0);

     
    let toggleLike = () => {

        setisLike(!isLike);

        setClick(click+1);

    }

    let likeStyle = { color : "red"};


    return (
        <div>
            <p>Clicks : {click}</p>

            <p onClickCapture={toggleLike}>
                {isLike ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) : (<i className="fa-regular fa-heart"></i>)}
            </p>

        </div>
    )
}