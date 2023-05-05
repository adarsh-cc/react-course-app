import { useState } from 'react';
import './App.css';
import CourseInput from './Components/CourseInput';
import CourseList from './Components/CourseList';

const Initialcourses=[];
function App() {
  const [newCourse,setCourse]=useState(Initialcourses);

  const addCourseHandler=(course)=>{
    //console.log("New course added: ",course.title, course.desc, course.duration);
    setCourse((prevCourses)=>{
      return [...prevCourses, course];
    });

   // console.log("New Course: ",newCourse);
  };

  const deleteCourseHandler=(course)=>{
       console.log("course to be deleted: ",course);
       console.log("old courses are: ",newCourse);
      const temp=newCourse.filter((oldcourse)=>{
          if(oldcourse.title!== course.title){
            return oldcourse;
          }
      });
      setCourse(temp);
      console.log("Couses after deletion: ",temp);
  };
  

  return (
    <div className="App">
      <h1>Course App</h1>
      <div className='course-input'>
          <CourseInput onAddCourse={addCourseHandler}/>
      </div>
      
      {newCourse.map((course)=>(
        <CourseList id={course.id} title={course.title} desc={course.desc} duration={course.duration} onDelete={deleteCourseHandler}/>
      ))};
      
    </div>
  );
}

export default App;
