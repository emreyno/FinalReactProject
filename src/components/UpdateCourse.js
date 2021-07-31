import '../components-css/AddCourse.css';
import { useState } from 'react';

const UpdateCourse=({update,course,isupdated})=> {

    const[code,setCode]=useState(course.code);
    const[title,setTitle]=useState(course.title);
    const[section,setSection]=useState(course.section);
    const[instructor,setInstructor]=useState(course.instructor);
    const[days,setDays]=useState(course.days);
    const[timeStart,setTimeStart]=useState(course.timeStart);
    const[timeEnd,setTimeEnd]=useState(course.timeEnd);
    const[units,setUnits]=useState(course.units);
    const[capacity,setCapacity]=useState(course.capacity);
    const[daysAndTime,setDaysAndTime]=useState(course.daysAndTime);

    const onClickAddCourse=() =>{
      
        setDaysAndTime(`${days} ${timeStart}-${timeEnd}`);
            let course = {
                code:code,
                title:title,
                section:section,
                instructor:instructor,
                days:days,
                timeStart:timeStart,
                timeEnd:timeEnd,
                daysAndTime:daysAndTime,
                units:units,
                capacity:capacity,
                enrolled:0,
                }
            
            update(course);
            isupdated();
         
    }


  return (
    <div className="new-course-container">
            <div className="header-con">
                <h1>Add Course</h1>
            </div>

            
                <div className="input-con">
                <p>Code:</p>
                <input className="input-text" type="Text" name="code" onChange={(e)=>setCode(e.target.value)} 
                value={code} autoComplete="off"></input>
                </div>
                

                <div className="input-con">
                <p>Title:</p>
                <input className="input-text"type="Text" name="title"  onChange={(e)=>setTitle(e.target.value.toUpperCase())} 
                value={title} autoComplete="off" ></input>
                </div>

                <div className="input-con">
                <p>Section:</p>
                <input className="input-text"type="Text" name="section"  onChange={(e)=>setSection(e.target.value.toUpperCase())} 
                value={section} autoComplete="off" ></input>
                </div>
           
            

                <div className="input-con">
                    Instructor:
                    <input className="input-text" type="Text" name="instructor" onChange={(e)=>setInstructor(e.target.value.toUpperCase())} 
                value={instructor}autoComplete="off"></input>
                </div>

                <div className="input-con">
                    Days:
                    <select className="input-select" name="days" value={days}onChange={(e)=>setDays(e.target.value)}>
                    <option value="">Select</option>
                    <option value="WF">WF</option>
                    <option value="TTH">TTH</option>
                    <option value="Mon">Mon</option>
                    <option value="Sat">Sat</option>
                </select>
                </div>
                <div className="input-con">
                    Start Time:
                    <input className="input-select"type="time" name="timeStart" onChange={(e)=>setTimeStart(e.target.value)} 
                value={timeStart} autoComplete="off"></input>
                </div>

                <div className="input-con">
                    End Time:
                    <input className="input-select"type="time" name="timeEnd" onChange={(e)=>setTimeEnd(e.target.value)} 
                value={timeEnd} autoComplete="off"></input>
                </div>

                <div className="input-con">
                    Units:
                    <input className="input-number"type="number" name="units" onChange={(e)=>setUnits(e.target.value)} 
                value={units} min="1"autoComplete="off"></input>
                </div>

                <div className="input-con">
                    Capacity:
                    <input className="input-number"type="number" name="capacity" onChange={(e)=>setCapacity(e.target.value)} 
                value={capacity} min="10" autoComplete="off"></input>
                </div>

                {/* <div className="input-con">
                    Enrolled Students:
                    <input className=""type="Text" name="studId" onChange="" autoComplete="off"></input>
                </div> */}

                <div class="btn-con">
                
                <button className="add-btn"type="button" onClick={onClickAddCourse}>Update</button>


                </div>
            

                
           
            
        
    </div>
  );
}

export default UpdateCourse;
