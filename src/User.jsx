import React from "react";

export const User = (props) => {
    // console.log(props.data.name);
    const { data } = props;

    return (
        <div>
            <h1>User Component</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}