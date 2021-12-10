import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn React',
      day: 'Friday',
      reminder: true
    },
    {
      id: 2,
      text: 'Add React to Raven',
      day: 'Saturday',
      reminder: false
    }
  ])


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <Header user='Thomas'/>
     { tasks.length > 0 ? <Tasks tasks={tasks}
       onDelete={deleteTask}/> : "There are no tasks" }
    </div>
  );
}

export default App;
