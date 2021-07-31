import './App.css';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import DashBoard from './components/DashBoard';
import CourseList from './components/CourseList';
import StudentList from './components/StudentList';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
function App() {
    const [students,setStudents]=useState([
      {
        id:1,
        studId:'2018-25115',
        degree:'Computer Science',
        yearLevel:'Third Year',
        status:'Continuing',
        lastName:'Agoncillo',
        firstName:'John',
        middleName:'Lopez',
        suffix:'Jr',
        acadYear:'2021-2022',
        semester:'Second Semester',
        presentAdd:'Quezon City',
        presentZip:'1008',
        permAdd:'Quezon City',
        permZip:'1008',
        contact:'09085647337',
        birthDate:'07/14/2000',
        civilStat:"Single",
        father:"Jose Agoncillo",
        mother:"Teodora Lopez",
        guardian:"",
        guardianAdd:"Quezon City", 
        courses:[
          {
            
            id: 1, 
            code: "32516",
            daysAndTime: "WF 07:30-08:30",
            instructor: "ANDREW CACAL",
            section: "A",
            title: "ITECC1",
            units: "3",
            
          
          }
        ]   
      },
      
    ]);
    const [course,setCourse]=useState([
      {
      id: 1, 
      capacity: "30",
      code: "32516",
      daysAndTime: "WF 07:30-08:30",
      enrolled: 0,
      instructor: "ANDREW CACAL",
      section: "A",
      title: "ITECC1",
      units: "3",
      timeEnd: "08:30",
      timeStart: "07:30",
    },
    {
      id: 2,
      capacity: "30",
      code: "01253",
      daysAndTime: "WF 15:00-16:00",
      enrolled: 0,
      instructor: "NILDA CRUZ",
      section: "A",
      title: "ITECC2",
      units: "3",
      timeEnd: "16:00",
      timeStart: "15:00"
    },
    {
      id: 3, 
      code: '15298',
      title:'MATH53',
      section: "CD",
      instructor:'PAUL ORTEGA',
      daysAndTime:'WF 10:00-11:00',
      units:5,
      capacity:30,
      enrolled:0,
      timeEnd: "10:00",
      timeStart: "11:00",
      studentsEnrolled:[],
    },
    {
      id: 4,
      capacity: "30",
      code: "02135",
      daysAndTime: "WF 08:30-09:30",
      enrolled: 0,
      instructor: "NAP ANTONIO",
      section: "B",
      title: "ITECC1",
      units: "3",
      timeEnd: "08:30",
      timeStart: "09:30"

    },
    {
      id: 5,
      capacity: "30",
      code: "22865",
      days: "TTH",
      daysAndTime: "TTH 07:30-08:30",
      enrolled: 0,
      instructor: "ANGELICA RAMOS",
      section: "X",
      timeEnd: "08:30",
      timeStart: "07:30",
      title: "CMSC11",
      units: "3",

    },
    {
      id: 6,
      capacity: "30",
      code: "66354",
      days: "TTH",
      daysAndTime: "TTH 10:30-11:30",
      enrolled: 0,
      instructor: "ROMSTO AGUINALDO",
      section: "B",
      timeEnd: "11:30",
      timeStart: "10:30",
      title: "MATH101",
      units: "3",
    },
    {
      id: 7,
      capacity: "30",
      code: "77956",
      days: "WF",
      daysAndTime: "WF 16:00-17:00",
      enrolled: 0,
      instructor: "JOCELYN BERNARDO",
      section: "K",
      timeEnd: "17:00",
      timeStart: "16:00",
      title: "PE2",
      units: "2",

    }
    

  ]);
  console.log("here")
  console.log(course)
  console.log("here")
  console.log(students)
    const newcourse=(Newcourse) =>{
    
      Newcourse.id=course.length+1;
      let courseCopy = [...course];
      courseCopy.push(Newcourse);
      
      setCourse(courseCopy);
      alert("Course Successfully Added")
      console.log(courseCopy);
    }

    const newStudent=(NewStudent) =>{
      
      NewStudent.id=students.length+1;
      let studentCopy = [...students];
      studentCopy.push(NewStudent);
      
      setStudents(studentCopy);
    }
  
    const studentUpdate=(info)=>{
      let studentsCopy= [...students];
      
      let index = studentsCopy.findIndex(i => i.studId === info.studId);
      studentsCopy[index] = info;

      setStudents(studentsCopy);
    }

    const removeCourse=(data)=>{
      const courseRemove = course.filter( course => course.id !== data.id);

        setCourse(courseRemove);

    }
    const updateCourse=(data)=>{
      let courseCopy= [...course];
      
     
      let index = courseCopy.findIndex(i => i.code === data.code);
      courseCopy[index] = data;
      
      setCourse(courseCopy);
    }
    console.log("Im here");
    console.log(course);

  return (
    <div className="App">
      
      {/* <AddStudent/> */}
      {/* <AddSubject/> */}
      <div className="sidebar">
        
        <div className="img-container">
          <img className="logo" alt="institution-logo"src="https://i.pinimg.com/736x/99/08/ee/9908ee0aa4bb2245a570782e64341160.jpg"></img>
        </div>

        <div className="navigation">
        <Link className="app-link" to="/dashboard">Dashboard</Link>
        <Link className="app-link" to="/enroll">Enroll</Link>
        <Link className="app-link" to="/search-student">Students</Link>
        <Link className="app-link" to="/search-course">Courses</Link>
        <Link className="app-link" to="/new-course">Add Course</Link>
        </div>
        
      </div>

      <div className="display">

        <Route path="/dashboard" >
          <DashBoard 
            students={students} 
            courses={course} 
          />
        </Route>
       
        <Route path="/enroll" >
          <AddStudent 
            student={newStudent} 
            course={course} 
          />
        </Route>

        <Route path="/new-course" >
          <AddCourse 
            add={newcourse}
            course={course}
          />
        </Route>

        <Route path="/search-course" >
          <CourseList 
            course={course} 
            updateCourse={updateCourse} 
            remove={removeCourse}
          />
        </Route>

        <Route path="/search-student">
          <StudentList 
            student={students} 
            setStudent={setStudents} 
            updateStud={studentUpdate}
            course={course} 
          />
        </Route>
        
        

        
      </div>

      

     
    </div>
  );
}

export default App;
