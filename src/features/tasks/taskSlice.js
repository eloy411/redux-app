import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        taskName: "Task 1",
        description: 'primera tarea'
    },
    {
        id: "2",
        taskName: "Task 2",
        description: 'segunda tarea'
    },
    {
        id: "3",
        taskName: "Task 3",
        description: 'tercera tarea'
    }
]

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) =>{
            let result = state.find(task=> task.id === action.payload)
            if(result) {
                state.splice(state.indexOf(result),1)
            }
        },editTask:(state,action)=>{
            let result = state.find(task=>task.id === action.payload.id)

            if(result){
                result.title = action.payload.title
                result.description = action.payload.description
            }
        }
    }
})

export const { addTask,deleteTask,editTask } = taskSlice.actions

export default taskSlice.reducer