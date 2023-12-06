import React, { useState } from 'react'

function Form() {
    const[nam,setNam]=useState("");
    const[pass,setPass]=useState("");
    function named(event){
        setNam(event.target.value);
    }
    function passed(event){
        setPass(event.target.value);
    }
    function sub(){
        alert(`Welcome ${nam}`)
    }
    const[col,setCol]=useState({
        color:"black",
        backgroundColor:"white"
    });
    function mode(){
        if(col.color === "white"){
            setCol({color:"black",backgroundColor:"white"});
        }
        else{
            setCol({color:"white",backgroundColor:"black"});
        }

    }
  return (
    <div className='form' >
        <div style={col}>
           welcome to form login
        </div>
        <div style={col}>
            <form>
                <h3>User Name:</h3>
               <h3> <input type='text' placeholder='enter name' onChange={named}/></h3>
                <h3>Password:</h3>
                <input type='password' placeholder='enter password' onChange={passed}/><br/><br/>

                <button onClick={sub}>Submit</button>
       
            </form>
            <button onClick={mode} style={{marginTop:"70px",marginLeft:"2px"}}>Mode</button>
        </div>
    
      
    </div>
  )
}

export default Form
