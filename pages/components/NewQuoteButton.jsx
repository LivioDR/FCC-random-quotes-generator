import React, { Children } from "react";

const NewQuoteButton = (props) => {
    return(
        <a type="button" id={props.id} onClick={props.func} style={props.style}>
            {props.children}
        </a>
    )
}
export default NewQuoteButton