
import '../components-css/StudentList.css';



const StudentSearch=({display,update})=> {

const onClickUpdate =()=>{
  update(display);

}
  return (
   <tr>
       <td>{display.studId}</td>
       <td>{display.firstName}</td>
       <td>{display.middleName}</td>
       <td>{display.lastName}</td>
       <td>{display.suffix}</td>
       <td>{display.yearLevel}</td>
       <td>{display.degree}</td>
       <td><button type="button" onClick={onClickUpdate}><img className="edit-icon"src="https://image.flaticon.com/icons/png/512/181/181540.png" alt="edit-icon"></img></button></td>
   </tr>
   
  );
}

export default StudentSearch;