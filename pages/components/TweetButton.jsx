import React from "react";

const TweetButton = (props) => {
    return(
        <a id={props.id} href={props.url} target="_blank" rel="noreferrer" style={props.style}>
            {props.children}
        </a>
    )
}
export default TweetButton