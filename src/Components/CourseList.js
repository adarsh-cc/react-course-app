import React, { useState } from "react";
import CourseDescription from "./CourseDescription";
import "./CourseList.css";
const CourseList=(props)=>{
    const [details,setDetails]=useState(false);

    const showDetails=()=>{
        setDetails(true);
        console.log("selected course", "course title: ",props.title, "course desc: ",props.desc, "course duration: ",props.duration);
    }

    const hideDetailsHandler=()=>{
        setDetails(false);
    }

    const deleteCourse=()=>{
        const deleteCourse={
            "id":props.id,
            "title":props.title,
            "desc":props.desc,
            "duration":props.duration
        };
        props.onDelete(deleteCourse);
    }

    return(
        <div className="course-border">
            <h2>Title: {props.title}</h2>
            <h3>Duration: {props.duration}</h3>
            <button type="button" onClick={showDetails}>Show Details</button>
            <button type="button" onClick={deleteCourse}>Delete</button>
            {details && <CourseDescription desc={props.desc} onHideDetails={hideDetailsHandler}/>}
            
        </div>
    )
};

export default CourseList;