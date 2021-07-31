import { useState } from 'react';
import TaskTable from './TaskTable';
import AddTaskForm from './AddTaskForm';
import '../components-css/Task.css';
const ToDoApp = () => {
    const [tasks, setTasks] = useState([
        
      ]);
    
      const addTask = (task) => {
        let tasksCopy = [...tasks, task];
    
        setTasks(tasksCopy);
      } 
    const pendingTasks = [];
    const doneTasks = [];

    tasks.forEach( task => {
        if(task.status === 'pending') {
            pendingTasks.push(task);
        } else if(task.status === 'done') {
            doneTasks.push(task);
        }
    });

    const deleteTask = (name) => {
        const updatedTasks = tasks.filter( task => task.name !== name);

        setTasks(updatedTasks);
    }

    const markAsDone = (name) => {
        // const updatedTasks = tasks.map ( task => {
        //     if(task.name === name) {
        //         task.status = 'done';
        //     }
        //     return task;
        // })
        const tasksCopy = [...tasks];
        const index = tasks.findIndex( task => task.name === name);
        tasksCopy[index].status = 'done';

        setTasks(tasksCopy);
    }

    return(
        <div class="TaskDisplay">
            <div className="task-header">
            <h1>ADD TASK</h1>
            <AddTaskForm addTask={addTask} tasks={tasks} />
          
            </div>

            <div className="task-table">
            
            <TaskTable 
                title="Pending Tasks" 
                tasks={pendingTasks} 
                deleteTask={deleteTask} 
                markAsDone={markAsDone} 
            />

            </div>
            
            <div className="task-table">
            <TaskTable 
                title="Done Tasks" 
                tasks={doneTasks} 
                deleteTask={deleteTask}
            /> 
              <p className="credits">Task App by Paul Jan Saracho</p>
              <p className="credits">Design by Elymer Reyno</p>
            </div>
            
        </div>
    )
}

export default ToDoApp;
