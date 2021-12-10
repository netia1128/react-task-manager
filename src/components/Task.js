import Button from './Button';

const Task = ({task}) => {
  return (
    <article className='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button color='darkred' text='Delete Task' />
    </article>
  )
}

export default Task
