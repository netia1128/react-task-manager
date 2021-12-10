const Header = ({user}) => {
  return (
    <header>
      <h1 style={({color: 'purple', backgroundColor: 'Lightgrey'})}>{user}'s Task Manager App</h1>
    </header>
  )
}

export default Header
