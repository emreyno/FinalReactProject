import '../components-css/CourseList.css';
import{useState} from 'react'
import CourseSearch from './CourseSearch';
import UpdateCourse from './UpdateCourse';


const CourseList=({course, remove,updateCourse})=> {
    const[findCourse,setFindCourse]=useState('');
    const [update,setUpdate]=useState(false)
    const [courseInfo,setCourseInfo]=useState([{}])

    const updateInfo = (info) =>{
        setUpdate(true);
        setCourseInfo(info);
     
       
    }
    const updated = () =>{
        setUpdate(false);
        alert("Updated Succesfully");
    }
   

   
    const search = course.filter(Search=> Search.title===findCourse).map(display=>
        <CourseSearch key={display.id} display={display}update={updateInfo} remove={remove}/>
    );
    console.log(search);
    
   

  return (
    <div className="courseList-con">
        {update?<UpdateCourse update={updateCourse} course={courseInfo} isupdated={updated}/>:

        <div  className="studlist-container">
            <div className="header-con">
                <h1>Course List</h1>
            </div>
            
            <div className="courseInput-con">
                <div className="container-left" >
                
                    <input className="course-input" type="Text" name="findCourse" value={findCourse} onChange={(e)=>setFindCourse(e.target.value.toUpperCase())} autoComplete="off" placeholder="Course Title"></input>
                </div>
            
                {/* <div className="container-right">
                    <button className="srch-btn" type="button" onClick={searchCourse}>Search</button>
                </div> */}
            
            </div>

            <div className="coursePreview">
                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Schedule</th>
                            <th>Units</th>
                            {/* <th>Capacity</th>
                            <th>Enrolled</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {search}
                    </tbody>

                </table>
            </div>
            
        </div>
        
        }
        
   
    </div>
  );
}

export default CourseList;
