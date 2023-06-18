import React from 'react'
import { useContext } from 'react';
import Mycontext from "./ContextData"
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {
    const useData=useContext(Mycontext);
    const navigate=useNavigate();
    const Location=useLocation().state.data

    const currentObj={
        name:useData.entries[Location].name,
        Age:useData.entries[Location].Age,
        Course:useData.entries[Location].Course,
        Batch:useData.entries[Location].Batch,
    }

    const change=(e)=>{
        currentObj[e.target.name]=e.target.value;
    }

    const HandleSubmit=()=>{
        useData.entries[Location]=currentObj;
        navigate(-1);
      }

  return (
    <div className='main'>
      <div className='new2'>
        <div className='child1'>
      <label>Name:
        <input type='text' name="name" onChange={change} placeholder={useData.entries[Location].name} className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Age:
        <input type='number' name="Age" onChange={change} placeholder={useData.entries[Location].Age} className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <div className='child1'>
      <label>Course:
        <input type='text' name="Course" onChange={change} placeholder={useData.entries[Location].Course} className='inp'/>
      </label>
      <br/>
      <br/>
      <label>Batch:
        <input type='text' name="Batch" onChange={change} placeholder={useData.entries[Location].Batch} className='inp'/>
      </label>
      <br/>
      <br/>
      </div>
      <button onClick={HandleSubmit} className='submit'>Update</button>
      </div>
    </div>
  )
}

export default Edit
