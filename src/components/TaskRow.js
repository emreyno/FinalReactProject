import '../components-css/Task.css'
const TaskRow = ({task: {name, status}, deleteTask, markAsDone}) => {
    return(
        <tr className="task-row">
            <td className="task-details">{name}</td>
            <td  className="task-icon ">
                {
                    status === 'pending' ?
                    <button className="task-icon-btn" onClick={() => markAsDone(name)}><img className="task-image"src="https://image.flaticon.com/icons/png/512/845/845646.png"></img></button> : null
                }
                <button className="task-icon-btn"onClick={() => deleteTask(name)}><img className="task-image"src="https://image.flaticon.com/icons/png/512/1828/1828843.png"></img></button>
            </td>
        </tr>
    );
}

export default TaskRow;