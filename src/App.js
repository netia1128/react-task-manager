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

  return (
    <div className="App">
      <Header user='Thomas'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
