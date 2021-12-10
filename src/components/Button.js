const Button = ({color, text, onClick}) => {
  // const logHelloWorld = () => {
  //   console.log('Hello World')
  // }

  return <button 
            onClick={onClick}
            className='btn'
            style={{ backgroundColor: color }}>{text}
         </button>
}

export default Button
