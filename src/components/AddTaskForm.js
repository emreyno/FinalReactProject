import { useState } from 'react';
import '../components-css/Task.css'
const AddTaskForm = (props) => {
    const [newTask, setNewTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const addTaskBtnHandler = () => {
        const index = props.tasks.findIndex( task => task.name.toLowerCase() === newTask.toLowerCase());
        
        if(newTask.trim() === '') {
            setErrorMessage('this field is required');
        } else if(index >= 0) {
            setErrorMessage('task already exists');
        } else {
            props.addTask({
                name: newTask,
                status: 'pending'
            });

            setNewTask('');
            setErrorMessage('');
        }
    }

    return(
        <div className="task-input-con">
          
            <input 
                className="input-task"
                type="text"
                value = {newTask}
                placeholder={errorMessage}
                onChange = { (e) => setNewTask(e.target.value)} 
            /> 
           
           
            <button class="task-button" onClick={addTaskBtnHandler}><img  class="task-image"src="https://image.flaticon.com/icons/png/128/1828/1828819.png" alt="add"></img></button>
           
        </div>
    )
}

export default AddTaskForm;