import Button from './Button.js';

const Header = ({user}) => {
  return (
    <header className='header'>
      {/* //Example of in-line styling */}
      {/* <h1 style={({color: 'purple', backgroundColor: 'Lightgrey'})}>{user}'s Task Manager App</h1> */}
      <h1>{user}'s Task Manager App</h1>
      <Button color='green' text='Add Task'/>
    </header>
  )
}

export default Header
