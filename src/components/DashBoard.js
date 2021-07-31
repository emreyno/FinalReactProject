
import TaskDisplay from './TaskDisplay';
import '../components-css/DashBoard.css';

const DashBoard=({students,courses})=> {
  
 
    console.log(courses.length);
  return (
    <div className="DashBoard-con">
      <div className="dash-col-two">
          <div className="half-size-con studentsNumber">
            <h1>Students Enrolled</h1>
            <p className="number">{students.length}</p>
          </div>

          <div className="half-size-con coursesNumber">
            <h1>Courses Offered</h1>
            <p className="number">{courses.length}</p>
          </div>
      </div>

      
      

      <div className="Task">
        <TaskDisplay/>
      </div>

       
    </div>
  );
}

export default DashBoard;
