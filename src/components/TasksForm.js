import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask,editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { Link, useParams, useNavigate } from "react-router-dom"


function TasksForm() {

    const [title, setTitle] = useState('')
    const [task, setTask] = useState({
        id: '',
        taskName: '',
        description: ''
    })

    const taskState = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(params.id){

            dispatch(editTask(task))
        }else{
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }
        

        navigate('/')
    }

    useEffect(() => {
        if (params.id) {
            setTitle('Update')
            setTask(taskState.find(task => task.id === params.id))
        } else {
            setTitle('Create')
        }

    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input name="taskName" type="text" placeholder="title" onChange={handleChange} value={task.taskName} />

                <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}></textarea>

                <button>Save</button>
            </form>
            <Link to="/">go to Task List</Link>
        </div>
    )
}

export default TasksForm