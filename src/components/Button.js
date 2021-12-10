const Button = ({color, text}) => {
  const logHelloWorld = () => {
    console.log('Hello World')
  }

  return <button 
            onClick={logHelloWorld}
            className='btn'
            style={{ backgroundColor: color }}>{text}
         </button>
}

export default Button
