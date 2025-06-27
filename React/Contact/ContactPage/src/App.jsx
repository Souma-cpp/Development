import { useState } from "react";
import "./App.css"

export default function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((previous) => {
      return {
        ...previous ,
        [name] : value 
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hey there, {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>

      <input
        name="fname"
        placeholder="First name"
        type="text"
        onChange={handleChange}
      />
      <input
        name="lname"
        placeholder="Last name"
        type="text"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
      />
    </div>
  );
}
