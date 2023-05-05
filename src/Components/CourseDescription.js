import React from "react";

const CourseDescription=(props)=>{
    return(
        <div>
            <h2>Description: {props.desc}</h2>
            <button type="button" onClick={props.onHideDetails}>Hide details</button>
        </div>
    )
}

export default CourseDescription;