import { useState } from "react";


function Form() {

  const [mouseover , setmouseover] = useState(false) ;

  function clickHandler(event) {
    event.preventDefault();  // Prevent form reload
    console.log("event type is:", event.type);
  }

  function over() {
    setmouseover(true) ;
  }
  function out(){
    setmouseover(false) ;
  }

  return (
    <div className="main-container">
      <h1>Hello</h1>
      <form>
        <label className="form-label">
          Username:
          <input
            className="form-input"
            type="text"
            placeholder="What is your username"
          />
        </label>
        <button
          onClick={clickHandler}
          onMouseOver={over}
          onMouseOut={out}
          className="form-button"
          style={{backgroundColor : mouseover ? "black" : "red"}}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Form;
