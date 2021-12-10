import Button from './Button';

const Task = ({task, onDelete}) => {
  return (
    <article className='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button 
        color='darkred' 
        text='Delete Task'
        onClick={() => onDelete(task.id)} 
      />
    </article>
  )
}

export default Task
