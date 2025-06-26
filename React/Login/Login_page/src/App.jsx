import Form from "./components/Form"

var isLoggedin = false ;

function App() {
  
  return (
    <>
      {/* {isLoggedin === true ? <h1>Hello sir</h1> : <Form/>} */}
      {isLoggedin === false && <Form/>}
    </>
  )
}

export default App
