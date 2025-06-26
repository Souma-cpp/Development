import './App.css'
import Form from './Form'

var isRegistered = true ;

function App() {

  return (
   <>
      {isRegistered === true ? <Form heading='Login' button='Login' boolean={isRegistered} /> : <Form heading='Register' button='Register' boolean={isRegistered}/> }
   </>
  )
}

export default App
