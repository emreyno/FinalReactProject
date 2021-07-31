import '../components-css/DashBoard.css';


const SelectCourse=({display,enroll,courses})=> {
 
 

  const Enroll=() =>{
    
 

      let courseDetails = {
        code:display.code,
        title:display.title,
        instructor:display.instructor,
        daysAndTime:display.daysAndTime,
        units:display.units,
        }
        
      enroll(courseDetails);

    

  }

  return (
   <tr>
       <td>{display.code}</td>
       <td>{display.title}</td>
       <td>{display.instructor}</td>
       <td>{display.daysAndTime}</td>
       <td>{display.units}</td>
       {/* <td>{display.capacity}</td>
       <td>{display.enrolled}</td> */}
       <td><button type="button"onClick={Enroll}><img className="add-icon" src="https://image.flaticon.com/icons/png/512/148/148764.png" alt="add-icon"></img></button></td>
   </tr>
  );
}

export default SelectCourse;