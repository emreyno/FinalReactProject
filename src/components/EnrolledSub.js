import '../components-css/StudentList.css';


const EnrolledSub=({display,removeSubject})=> {

 

  return (
   <tr>
       <td>{display.code}</td>
       <td>{display.title}</td>
       <td>{display.instructor}</td>
       <td>{display.daysAndTime}</td>
       <td>{display.units}</td>
       <td><button onClick={()=>removeSubject(display)}><img  alt="remove"className="remove-icon"src="https://image.flaticon.com/icons/png/512/1828/1828843.png"></img></button></td>

       
   </tr>
  );
}

export default EnrolledSub;