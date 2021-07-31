import '../components-css/AddStudent.css';
import SelectCourse from './SelectCourse';
import EnrolledSub from './EnrolledSub';

import { useState } from 'react';
const AddStudent=({course,student,updateStud,isupdated})=> {
    const[findCourse,setFindCourse]=useState('');
    const[courses,setCourses]= useState(student.courses);
    // const [studentInfo,setStudentInfo]=useState([]);
    // setStudentInfo(student);

    const[status,setStatus]=useState(student.status);
    const[studId,setStudId]=useState(student.studId);
    const[degree,setDegree]=useState(student.degree);
    const[yearLevel,setYearLevel]=useState(student.yearLevel);
    const[lastName,setLastName]=useState(student.lastName);
    const[firstName,setFirstName]=useState(student.firstName);
    const[middleName,setMiddleName]=useState(student.middleName);
    const[suffix,setSuffix]=useState(student.suffix);
    const[acadYear,setAcadYear]=useState(student.acadYear);

    const[semester,setSemester]=useState(student.semester);
    const[presentAdd,setPresentAdd]=useState(student.presentAdd);
    const[presentZip,setPresentZip]=useState(student.presentZip);
    const[permAdd,setPermAdd]=useState(student.permAdd);
    const[permZip,setPermZip]=useState(student.permZip);

    const[contact,setContact]=useState(student.contact);
    const[birthDate,setBirthDate]=useState(student.birthDate);
    const[sex,setSex]=useState('');
    const[civilStat,setCivilStat]=useState(student.civilStat);
    const[father,setFather]=useState(student.father);

    const[mother,setMother]=useState(student.mother);
    const[guardian,setGuardian]=useState(student.guardian);
    const[guardianAdd,setGuardianAdd]=useState(student.guardianAdd);

//    console.log(studentInfo.lastName);

    const onClickEnroll=() =>{
               
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
            presentAdd:presentZip,
            presentZip:presentZip,
            permAdd:permAdd,
            permZip:permZip,
            contact:contact,
            sex:sex,
            birthDate:birthDate,
            civilStat:civilStat,
            father:father,
            mother:mother,
            guardian:guardian,
            guardianAdd:guardianAdd,
            courses:courses,
            }
        
        updateStud(studentInfo);
        isupdated();
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
        setCourses([]);
    }

  
   
    const addEnrolledCourses =(enrollCourse)=>{
        
        const index = courses.findIndex( course => course.code === enrollCourse.code);
        

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
        <SelectCourse key={display.id} display={display} enroll={addEnrolledCourses}/>
    );

    const enrolledSub = courses.map(display=>
        <EnrolledSub key={display.id} display={display} removeSubject={removeSubject}/>
    );

    

    


  return (
    <div className="new-course-container">
       <div className="header-con">
                <h1>Update Student Information Sheet</h1>
        </div>

        <div className="info-wrapper">
            <div className="con-col-two">
            <div className="row-left">
                Student Status:
                <select className="input-select" name="studStat" placeholder={student.status}onChange={(e)=>setStatus(e.target.value)}>
                    <option value="New">New</option>
                    <option value="Continuing">Continuing</option>
                    <option value="Returning">Returning</option>
                </select>
            </div>
            
            <div className="row-right">
                Student ID:
                <input className="input-text"type="Text" name="studId" autoComplete="off" placeholder={student.studId} onChange={(e)=>setStudId(e.target.value)} 
                value={studId}></input>
               
            </div>

            </div>
            <div className="con-col-two">
            <div className="row-left">
                    Degree Program:
                    <select className="input-select" name="degree" placeholder={student.degree}onChange={(e)=>setDegree(e.target.value)}>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Information System">Information System</option>
                    </select>
                </div>

                <div className="row-right">
                    Year Level:
                    <select className="input-select" name="yearLevel" placeholder={student.yearLevel} onChange={(e)=>setYearLevel(e.target.value)}>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Third Year">Fourh Year</option>
                    </select>
                </div>
            
             
               

            </div>

            <div className="addStudInput-con">
                Last Name:
               <input className="input-text"type="Text" name="lastName" autoComplete="off" placeholder={student.lastName} onChange={(e)=>setLastName(e.target.value.toUpperCase())} 
                value={lastName}></input>
            </div>
              
            <div className="addStudInput-con">
                First Name:
               <input className="input-text"type="Text" name="firstName" autoComplete="off" placeholder={student.firstName} onChange={(e)=>setFirstName(e.target.value.toUpperCase())} 
                value={firstName}></input>
            </div>

            <div className="addStudInput-con">
               Middle Name:
               <input className="input-text"type="Text" name="middleName" autoComplete="off" placeholder="Enter Middle Name" onChange={(e)=>setMiddleName(e.target.value.toUpperCase)} 
                value={middleName}></input>
            </div>
              
            <div className="addStudInput-con">
                Suffix:
               <input className="input-text"type="Text" name="suffix" autoComplete="off" placeholder={student.suffix} onChange={(e)=>setSuffix(e.target.value.toUpperCase())} 
                value={suffix} ></input>
            </div>

            <div className="con-col-two">
                <div className="row-left">
                    <p>Academic Year:</p>
                <input className="input-text-col"type="Text" name="suffix" autoComplete="off" placeholder={student.acadYear} onChange={(e)=>setAcadYear(e.target.value)} 
                value={acadYear} ></input>
                </div>

                <div className="row-right">
                    Semester:
                    <select className="input-select"name="semester" onChange={(e)=>setSemester(e.target.value)}>
                        <option value="First Semester">First Semester</option>
                        <option value="Second Semester">Second Semester</option>
                        <option value="Mid-Year">Mid-year</option>
                    </select>
                </div>

            </div>

        

            <div  className="addStudInput-con">
                Present Address:
               <input className="input-text"type="Text" name="presentAddress" autoComplete="off" placeholder={student.presentAdd} onChange={(e)=>setPresentAdd(e.target.value)} 
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
               <input className="input-select" type="date" name="birthday" onChange={(e)=>setBirthDate(e.target.value)} 
                value={birthDate} >
              </input>
            </div>

            </div>
            
              <div className="con-col-two">
              <div  className="row-left">
                Sex:
                <select className="input-select" name="sex"  onChange={(e)=>setSex(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Intersex">Intersex</option>
                </select>
            </div>

            <div className="row-right">
                Civil status:
                <select className="input-select" name="civilstat" placeholder={student.civilStat}onChange={(e)=>setCivilStat(e.target.value)}>
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
               <input className="input-text"type="Text" name="father" autoComplete="off" placeholder={student.father}  onChange={(e)=>setFather(e.target.value)} 
                value={father}/>
            </div>

            <div className="addStudInput-con">
               Mother's Name:
               <input className="input-text"type="Text" name="mother" autoComplete="off" placeholder={student.mother} onChange={(e)=>setMother(e.target.value)} 
                value={mother}/>
            </div>

            <div className="addStudInput-con">
               Guadian's Name:
               <input className="input-text"type="Text" name="guardiansName"autoComplete="off" placeholder={student.guardian} onChange={(e)=>setGuardian(e.target.value)} 
                value={guardian}/>
            </div>

            <div className="addStudInput-con">
               Parent/Guadian Address:
               <input className="input-text"type="Text" name="parentAddress" autoComplete="off" placeholder={student.guardianAdd} onChange={(e)=>setGuardianAdd(e.target.value)} 
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

        <h2>Enrolled Courses</h2>

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
                
            <button className="add-btn"type="button" onClick={onClickEnroll}>Update</button>


        </div>

    </div>
  );
}

export default AddStudent;
