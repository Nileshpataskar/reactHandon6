import React, { useContext } from 'react'
import Mycontext from './ContextData'
import { useNavigate,Link} from 'react-router-dom';

function Table() {

  const useData=useContext(Mycontext);
  const navigate=useNavigate();
  return (
    <>
    <div  className='head'>
      <h1>Student Details</h1>
      <button className='btn' onClick={()=>{navigate("/NewStudent")}}>Add New student</button>
    </div>
    <div className='table'>
      <table border="1" className='table2' cellSpacing={0}>
        <thead className='heading'>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>

            </tr>
        </thead>
        <tbody>
               {useData.entries.map((item,index)=>(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td> 
                  <td>
                    <Link to='/changeData' state={{data:index}}>Edit</Link>
                  </td>
                </tr>

               ))}
                
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table
