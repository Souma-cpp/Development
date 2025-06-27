import { useState } from "react"
import "./form.css"

export default function Form(){

    const [firstname , setfirstname] = useState("") ;
    const [lastname , setlastname] = useState("") ;

    const [name , setname] = useState("user") ;

    function firstnameTrcaker(event){
        setfirstname(event.target.value) ;
    }

    function lastnameTracker(event){
        setlastname(event.target.value) ;
    }

    function greeting(){
        event.preventDefault() ;
        var newname = firstname + lastname ;
        setname(newname) ;
        setfirstname("") ;
        setlastname("") ;
    }

    return (
        <>
            <form>
                <h2>Hello {name}</h2>
                <input onChange={firstnameTrcaker} name="firstname" placeholder="Enter your first name" type="text"/>
                <input onChange={lastnameTracker} name="lastname" placeholder="Enter your last name" type="text"/>
                <button onClick={greeting} >Login</button>
            </form>
        </>
    )
}