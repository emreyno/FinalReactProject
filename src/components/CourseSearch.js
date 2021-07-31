import '../components-css/StudentList.css';



const CourseSearch=({display,remove,update})=> {
  const onClickUpdate =()=>{
    update(display);
  
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
       <td>
         <button onClick={onClickUpdate}><img className="edit-icon"src="https://image.flaticon.com/icons/png/512/181/181540.png" alt="edit-icon"></img></button>
         <button onClick={()=>remove(display)}><img  className="remove-icon"src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt="remove-icon"></img></button>
       </td>
   </tr>
  );
}

export default CourseSearch;
