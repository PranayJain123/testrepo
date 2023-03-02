

import axios from "axios";
import React, {useEffect, useState} from "react"
const Students = () => {
    const [students,setStudents]=useState([]);
    const [name,setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [dob,setDob]=useState([]);
    const clickHandler = (e) => {
        e.preventDefault()
        console.log("hi");
        axios.get("http://localhost:8080/api/v1/student")
        .then((res)=>{
            console.log(res);
            setStudents(res.data)
        })
        .catch((err)=>console.log(err))
    };
    const submit= (e) => {
        e.preventDefault();
        const payLoad = {
            name: name,
            email: email,
            dob: dob
        };
        console.log(payLoad)
        try {            
            axios.post("http://localhost:8080/api/v1/student", payLoad);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        // axios.get("http://localhost:8080/api/v1/student")
        // .then((res)=>{
        //     console.log(res);
        //     setStudents(res.data)
        // })
        // .catch((err)=>console.log(err))
    },[])
    return (
        <div className="App">
            <form>
            <div className="form-group">
                        <label>Name</label>
                        <input onChange={(e)=>setName(e.target.value)} type="name" className="form-control" id="exampleInputName" placeholder="Name"/>
                      </div>
              <div className="form-group">
                <label>Email address</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted"></small>
              </div>
                <div className="form-group">
                <label>DOB</label>
                <input onChange={(e)=>setDob(e.target.value)} type="dob" className="form-control" id="exampleInputDob" placeholder="DOB"/>
                </div>
    
              <button onClick={submit} type="submit" className="btn btn-primary">Submit</button>
              <button onClick={clickHandler} type="submit" className="btn btn-primary">Get</button>
    
    
            </form>
            <div>
                {
                students.map((st)=> {
                    return <>
                        {st.name}
                    </>
                })
                }
            </div>
        </div>
      );
    }
    

export default Students
