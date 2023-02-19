
import { useSelector,useDispatch } from "react-redux"
import {deleteTask} from '../features/tasks/taskSlice'
import { Link } from "react-router-dom"

function TasksList() {

        const taskState = useSelector(state=>state.tasks)
    
        const dispatch = useDispatch()

        const handleDelete = (id)=>{
            dispatch(deleteTask(id))
        }

    return(
        <div>
            <header>
                <Link to="/add">create task</Link>
            </header>
        <h1>TasksList</h1>
            {taskState.map(task=><div key={'task-' + task.id}>
                <h3>{task.taskName}</h3>
                <p>{task.description}</p>
                <button onClick={()=>handleDelete(task.id)}>Delete</button>
                <button>{<Link to={`/update/${task.id}`}>update</Link>}</button>
            </div>)}
        </div>
    )
}

export default TasksList