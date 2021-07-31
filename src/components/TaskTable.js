import TaskRow from './TaskRow';
import '../components-css/Task.css'
const TaskTable = ({tasks, title, deleteTask, markAsDone}) => {
    const display = tasks.length > 0 ?
    <div>
        <h2>{title}</h2>
        <table className="task-item"> 
            {
                tasks
                    .map( task => <TaskRow task={task} deleteTask={deleteTask} markAsDone={markAsDone}/>)
            }
        </table>
    </div> : 
    <h2>No {title}</h2>
    
    return(
        <div>
            {display}
        </div>
    )
}

export default TaskTable;