import '../components-css/StudentList.css';
import{useState} from 'react'
import StudentSearch from './StudentSearch';

import UpdateStudent from './UpdateStudent';


const StudentList=({student,updateStud,course})=> {
    const [update,setUpdate]=useState(false)
    const [studentInfo,setStudentInfo]=useState([{}])

    const updateInfo = (info) =>{
        setUpdate(true);
        setStudentInfo(info);

       
    }
    const updated = () =>{
        setUpdate(false);
      alert("Updated Succesfully");
    }
   
    
  


  const[findStud,setFindStud]=useState('');
//   const [update,setUpdate]=useState=('false');
  const search = student.filter(Search=> Search.studId===findStud)
  const show= search.map(display=>
    <StudentSearch key={display.id} display={display} update={updateInfo}/>);
  
    // const updateInfo=(answer)=>{
    //     update=answer;
    // }
   console.log("search"+search)
   console.log(search)
  return (
    <div className="new-course-container">


        {update?
        
     
        <UpdateStudent 
            student={studentInfo} 
            course={course} 
            updateStud={updateStud}
            isupdated={updated}
        />
        
        :
        
        // {/* // <-----Search Student-----> */}
    <div className="studlist-container">
        <div className="header-con">
                <h1>Search Student</h1>
        </div>

        <div className="courseInput-con">
            <div className="container-left" >
            
                <input className="course-input" type="Text" name="studId" autoComplete="off" placeholder="Student ID" onChange={(e)=>setFindStud(e.target.value)} 
                value={findStud}></input>
            </div>
           
            {/* <div className="container-right">
                <button className="srch-btn" type="button" onClick="">Student</button>
            </div> */}
           
        </div>  

            
        <div className="studentPreview">
            <table>
                <thead>
                    <tr>
                        <th>ID number</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Suffix</th>
                        <th>Year Level</th>
                        <th>Degree Program</th>
                    </tr>
                </thead>
                <tbody>
                {show}
                </tbody>

            </table>
        </div>
        

    </div>
    }

      
          
       
    </div>
  );
}

export default StudentList;
