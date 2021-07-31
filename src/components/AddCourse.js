import '../components-css/AddCourse.css';
import { useState } from 'react';

const AddCourse=({add,course})=> {

    const[code,setCode]=useState('');
    const[title,setTitle]=useState('');
    const[section,setSection]=useState('');
    const[instructor,setInstructor]=useState('');
    const[days,setDays]=useState('');
    const[timeStart,setTimeStart]=useState('');
    const[timeEnd,setTimeEnd]=useState('');
    const[units,setUnits]=useState(1);
    const[capacity,setCapacity]=useState(10);

    const [errorMessage,setErrorMessage]=useState('');
    let daysAndTime = `${days} ${timeStart}-${timeEnd}`;
    console.log(daysAndTime)
              
    const onClickAddCourse=() =>{
        const courseCode = course.findIndex( course => course.code === code);
        console.log(courseCode)
        if(courseCode<0){
                if(code===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(title===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(section===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(instructor===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(days===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(timeStart===''){
                    setErrorMessage("fill-out all the fields");
                }
                else if(timeEnd===''){
                    setErrorMessage("fill-out all the fields");
                }
                else{      
                    let course = {
                        code:code,
                        title:title.toUpperCase(),
                        section:section.toUpperCase(),
                        instructor:instructor.toLocaleUpperCase(),
                        days:days,
                        timeStart:timeStart,
                        timeEnd:timeEnd,
                        daysAndTime:daysAndTime,
                        units:units,
                        capacity:capacity,
                        enrolled:0,
                        }
                    
                    add(course);
                    setCode('')
                    setTitle('');
                    setSection('');
                    setInstructor('');
                    setDays('');
                    setTimeStart('');
                    setTimeEnd('');
                    setUnits(0);
                    setCapacity(0);
                    setErrorMessage('');
                }
            }
        else{
            setErrorMessage("Course already Exist");
        } 
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
                    <select className="input-select" name="days" onChange={(e)=>setDays(e.target.value)}>
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

                <div class="btn-con">
                
                <button className="add-btn"type="button" onClick={onClickAddCourse}>Add</button>


                </div>
                <div class="btn-con">
                
                {errorMessage}


                </div>

                
           
            
        
    </div>
  );
}

export default AddCourse;
