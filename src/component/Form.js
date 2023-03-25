import { useState } from "react";
import React  from "react";
import District from "../District";
import {Link} from "react-router-dom";

function Form() {
    const [inputValue,setInputValue]=useState("");
    // const navigate=useNavigate();
    // let history=useHistory();
   
    function handleChange(event){
        setInputValue(event.target.value);
        // console.log(inputValue);
    }
    // console.log(setInputValue);
    function AnotherPage(e){
       e.preventDefault();
       <Link to="/District"
        />
        // history.push("./District");
        console.log(inputValue);
    }

    return (
      
        <div className="form">
        <form action="pincode">
        <label htmlFor="pincode">Enter Pincode</label><br />
        <input type="text" placeholder="Pincode" onChange={handleChange} value={inputValue}/><br />
        <button onClick={AnotherPage}>Lookup</button>
        </form>
        </div>


    );
}

export default Form;
