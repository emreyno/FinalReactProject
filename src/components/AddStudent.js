import '../components-css/AddStudent.css';
import SelectCourse from './SelectCourse';
import EnrolledSub from './EnrolledSub';
import { useState } from 'react';
const AddStudent=({course,student,updateCourses})=> {
    const[findCourse,setFindCourse]=useState('');
    const[courses,setCourses]= useState([]);

    const[status,setStatus]=useState('');
    const[studId,setStudId]=useState('');
    const[degree,setDegree]=useState('');
    const[yearLevel,setYearLevel]=useState('');
    const[lastName,setLastName]=useState('');
    const[firstName,setFirstName]=useState('');
    const[middleName,setMiddleName]=useState('');
    const[suffix,setSuffix]=useState('');
    const[acadYear,setAcadYear]=useState('');

    const[semester,setSemester]=useState('');
    const[presentAdd,setPresentAdd]=useState('');
    const[presentZip,setPresentZip]=useState('');
    const[permAdd,setPermAdd]=useState('');
    const[permZip,setPermZip]=useState('');

    const[contact,setContact]=useState('');
    const[birthDate,setBirthDate]=useState('');
    const[sex,setSex]=useState('');
    const[civilStat,setCivilStat]=useState('');
    const[father,setFather]=useState('');

    const[mother,setMother]=useState('');
    const[guardian,setGuardian]=useState('');
    const[guardianAdd,setGuardianAdd]=useState('');
   
    const [errorMessage,setErrorMessage]=useState('');

    const onClickEnroll=() =>{
        if(status===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(studId===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(degree===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(yearLevel===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(semester===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(sex===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(civilStat===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(birthDate===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(lastName===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(firstName===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(middleName===''){
            setErrorMessage("fill-out all the fields");
        }
       
        else if(acadYear===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(presentAdd===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(presentZip===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(permAdd===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(permZip===''){
            setErrorMessage("fill-out all the fields");
        }
        else if(contact===''){
            setErrorMessage("fill-out all the fields");
        }
      
 

            else{
              
        let studentInfo = {
            status:status,
            studId:studId,
            degree:degree,
            yearLevel:yearLevel,
            lastName:lastName,
            firstName:firstName,
            middleName:middleName,
            suffix:suffix,
            acadYear:acadYear,
            semester:semester,
            sex:sex,
            presentAdd:presentAdd,
            presentZip:presentZip,
            permAdd:permAdd,
            permZip:permZip,
            contact:contact,
            birthDate:birthDate,
            civilStat:civilStat,
            father:father,
            mother:mother,
            guardian:guardian,
            guardianAdd:guardianAdd,
            courses:courses
            }
            
        student(studentInfo);
        setStatus('');
        setStudId('');
        setDegree('');
        setYearLevel('');
        setLastName('');
        setFirstName('');
        setMiddleName('');
        setSuffix('');
        setAcadYear('');
        setSemester('');

        setPresentAdd('');
        setPresentZip('');
        setPermAdd('');
        setPermZip('');
        setContact('');
        setBirthDate('');
        setSex('');
        setCivilStat('');
        setFather('');
        setMother('');
        setGuardian('');
        setGuardianAdd('');
        setErrorMessage('');
        setCourses([]);

 
        }
        
        
    }

  

    const addEnrolledCourses =(enrollCourse)=>{

       

        const index = courses.findIndex( course => course.code === enrollCourse.code);
        
        console.log("index");
        console.log(index);

        if(index<0){
            
            enrollCourse.id=courses.length+1;
            let coursesCopy = [...courses];
            coursesCopy.push(enrollCourse);
    
            setCourses(coursesCopy);
            
          }
          else{
            alert("already enrolled")
          }
      
      
    }

    const removeSubject=(subject)=>{
        const removeSubject = courses.filter( course => course.id !== subject.id);

        setCourses(removeSubject);
    }
    const search = course.filter(Search=> Search.title===findCourse)
    
    const enroll= search.map(display=>
        <SelectCourse key={display.id} display={display} courses={courses} enroll={addEnrolledCourses}/>
    );

    const enrolledSub = courses.map(display=>
        <EnrolledSub key={display.id} display={display} courses={courses} removeSubject={removeSubject}/>
    );
    console.log(enrolledSub);

    

  return (
    <div className="new-course-container">
       <div className="header-con">
                <h1>Student Information Sheet</h1>
        </div>

        <div className="info-wrapper">
            <div className="con-col-two">
            <div className="row-left">
                Student Status:
                <select className="input-select" name="studStat" onChange={(e)=>setStatus(e.target.value)}>
                    <option value="">Select</option>
                    <option value="New">New</option>
                    <option value="Continuing">Continuing</option>
                    <option value="Returning">Returning</option>
                </select>
            </div>
            
            <div className="row-right">
                Student ID:
                <input className="input-text"type="Text" name="studId" autoComplete="off" placeholder="ID Number" onChange={(e)=>setStudId(e.target.value)} 
                value={studId}></input>
               
            </div>

            </div>
            <div className="con-col-two">
            <div className="row-left">
                    Degree Program:
                    <select className="input-select" name="degree" onChange={(e)=>setDegree(e.target.value)}>
                    <option value="">Select</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Information System">Information System</option>
                    </select>
                </div>

                <div className="row-right">
                    Year Level:
                    <select className="input-select" name="yearLevel" onChange={(e)=>setYearLevel(e.target.value)}>
                        <option value="">Select</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Third Year">Fourh Year</option>
                    </select>
                </div>
            
             
               

            </div>

            <div className="addStudInput-con">
                Last Name:
               <input className="input-text"type="Text" name="lastName" autoComplete="off" placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value.toUpperCase())} 
                value={lastName}></input>
            </div>
              
            <div className="addStudInput-con">
                First Name:
               <input className="input-text"type="Text" name="firstName" autoComplete="off" placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value.toUpperCase())} 
                value={firstName}></input>
            </div>

            <div className="addStudInput-con">
               Middle Name:
               <input className="input-text"type="Text" name="middleName" autoComplete="off" placeholder="Enter Middle Name" onChange={(e)=>setMiddleName(e.target.value.toUpperCase())} 
                value={middleName}></input>
            </div>
              
            <div className="addStudInput-con">
                Suffix:
               <input className="input-text"type="Text" name="suffix" autoComplete="off" placeholder="Enter Suffix" onChange={(e)=>setSuffix(e.target.value.toUpperCase())} 
                value={suffix} ></input>
            </div>

            <div className="con-col-two">
                <div className="row-left">
                    <p>Academic Year:</p>
                <input className="input-text-col"type="Text" name="suffix" autoComplete="off" placeholder="2020-2021" onChange={(e)=>setAcadYear(e.target.value)} 
                value={acadYear} ></input>
                </div>

                <div className="row-right">
                    Semester:
                    <select className="input-select"name="semester" onChange={(e)=>setSemester(e.target.value)}>
                        <option value="">Select</option>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                        <option value="Mid-Year">Mid-year</option>
                    </select>
                </div>

            </div>

        

            <div  className="addStudInput-con">
                Present Address:
               <input className="input-text"type="Text" name="presentAddress" autoComplete="off" placeholder="Enter Present Address" onChange={(e)=>setPresentAdd(e.target.value)} 
                value={presentAdd}></input>
            </div>

            <div  className="addStudInput-con">
               Zipcode:
               <input className="input-text"type="Text" name="zipcode" autoComplete="off" placeholder="Enter Zipcode" onChange={(e)=>setPresentZip(e.target.value)} 
                value={presentZip} ></input>
            </div>
              
            <div  className="addStudInput-con">
                Permanent Address:
               <input className="input-text" type="Text" name="permanentAddress" autoComplete="off" placeholder="Enter Permanent Address"  onChange={(e)=>setPermAdd(e.target.value)} 
                value={permAdd} ></input>
            </div>

            <div  className="addStudInput-con">
               Zipcode:
               <input className="input-text"type="Text" name="zipcode" autoComplete="off"  placeholder="Enter Zipcode" onChange={(e)=>setPermZip(e.target.value)} 
                value={permZip}></input>
            </div>

            <div className="con-col-two">
            <div  className="row-left">
                Contact Number:
               <input className="input-text-col"type="Text" name="contactNumber" autoComplete="off" placeholder="ex. 09554658741" onChange={(e)=>setContact(e.target.value)} 
                value={contact}></input>
            </div>

            <div  className="row-right">
               Birthdate:
               <input className="input-select" type="date"  name="birthday" onChange={(e)=>setBirthDate(e.target.value)} 
                value={birthDate} >
              </input>
            </div>

            </div>
            
              <div className="con-col-two">
              <div  className="row-left">
                Sex:
                <select className="input-select" name="sex"  onChange={(e)=>setSex(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Intersex">Intersex</option>
                </select>
            </div>

            <div className="row-right">
                Civil status:
                <select className="input-select" name="civilstat" onChange={(e)=>setCivilStat(e.target.value)}>
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="separated">Separated</option>
                    <option value="widowed">Widowed</option>
                </select>
            </div>
              </div>
            
            
          

            <div className="addStudInput-con">
                Father's Name:
               <input className="input-text"type="Text" name="father" autoComplete="off" placeholder="Enter Fathers Name"  onChange={(e)=>setFather(e.target.value)} 
                value={father}/>
            </div>

            <div className="addStudInput-con">
               Mother's Name:
               <input className="input-text"type="Text" name="mother" autoComplete="off" placeholder="Enter Mother's Name" onChange={(e)=>setMother(e.target.value)} 
                value={mother}/>
            </div>

            <div className="addStudInput-con">
               Guadian's Name:
               <input className="input-text"type="Text" name="guardiansName"autoComplete="off" placeholder="Enter Guardian's Name" onChange={(e)=>setGuardian(e.target.value)} 
                value={guardian}/>
            </div>

            <div className="addStudInput-con">
               Parent/Guadian Address:
               <input className="input-text"type="Text" name="parentAddress" autoComplete="off" placeholder="Enter Guardian Address" onChange={(e)=>setGuardianAdd(e.target.value)} 
                value={guardianAdd}/>
            </div>


            <div className="addStudInput-con">
                
                <h2>Choose Courses</h2>

                <input className="course-input" type="Text" name="findCourse" value={findCourse} onChange={(e)=>setFindCourse(e.target.value.toUpperCase())} autoComplete="off" placeholder="Course Code"></input>

            </div>
            
            <div className="coursePreview">
                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Tiltle</th>
                                <th>Instructor</th>
                                <th>Schedule</th>
                                <th>Units</th>
                                {/* <th>Capacity</th>
                                <th>Enrolled</th> */}
                            </tr>
                        </thead>
                        <tbody>
                        {enroll}
                        </tbody>

                    </table>
            </div>
            <br/>
            
            <h2>Selected Course</h2>

            <div className="coursePreview">
                
                    <table>
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Tiltle</th>
                                <th>Instructor</th>
                                <th>Schedule</th>
                                <th>Units</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                        {enrolledSub}
                        </tbody>

                    </table>
            </div>

          
            

          

        </div>

        
                
        <div class="btn-con">
                
            <button className="add-btn"type="button" onClick={onClickEnroll}>Enroll</button>


        </div>
        <div class="btn-con">
                
            <h1>{errorMessage}</h1>


        </div>


    </div>
  );
}

export default AddStudent;
