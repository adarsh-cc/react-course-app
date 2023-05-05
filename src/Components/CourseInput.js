import React, { useState } from "react";

const CourseInput=(props)=>{

    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [duration,setDuration]=useState('');

    const titleHandler=(event)=>{
        setTitle(event.target.value)
        console.log(title);
    }

    const descHandler=(event)=>{
        setDesc(event.target.value)
        console.log(desc);
    }

    const durationHandler=(event)=>{
        setDuration(event.target.value)
        console.log(duration);
    }

    const saveCourseHandler=(event)=>{
        event.preventDefault();
        const course={
            "id": Math.random().toString(),
            "title":title,
            "desc":desc,
            "duration":duration
        };
        props.onAddCourse(course);
        //console.log("Course title: "+ course.title + " Course desc: "+course.desc + " course duration: "+ course.duration);
    };

    return(
        <div className="course-border">
            <form onSubmit={saveCourseHandler}>
                <label>Enter Course Title</label>
                <input type="text" onChange={titleHandler}/> <br></br>
                <label>Enter Description</label>
                <input type="text" onChange={descHandler}/><br></br>
                <label>Enter Duration</label>
                <input type="text" onChange={durationHandler}/><br></br>
                <button type="submit">Add Course</button>
            </form>
        </div>
    )
}

export default CourseInput;