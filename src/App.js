import './App.css';

import {useDispatch,useSelector} from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TasksList/>}></Route>
        <Route path='/add' element={<TasksForm/>}></Route>
        <Route path='/update/:id' element={<TasksForm/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
