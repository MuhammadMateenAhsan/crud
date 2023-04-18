// Update.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const navigate=useNavigate();
  const handleupdate=(e)=>{
e.preventDefault()
axios.put(`http://127.0.0.1:8000/usertable/${id}`,obj)
.then(res=>{
  // navigate("/read")
}
)
navigate("/read")
  }
  // use the useparams to get the id from url
  const {id}=useParams();
  const [obj,setObj]=useState({
    id:id,
    name:'',
    email:'',
    city:''
  })
  // use axios to get the by id and setObj state with values
useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/usertable/${id}`)
  .then(res=>{
    setObj({...obj,name:res.data.name,email:res.data.email,city:res.data.city})
  })
  

},[])

  return (
    <>
      <div className='container'>
        <h2 className='display-4 text-center'>Update Data</h2>
        <form
          action=''
          className='mt-4 border p-4 rounded'
          onSubmit={handleupdate}
        >
          <label htmlFor=''>Name</label>
          <input
            type='text'
            name='name'
            id=''
            className='form-control'
            onChange={e=>setObj({...obj,name:e.target.value
            })}
            value={obj.name} 
          />

          <label htmlFor=''>Email</label>
          <input
            type='email'
            name='email'
            id=''
            className='form-control'
            onChange={e=>setObj({...obj,email:e.target.value
            })}
            value={obj.email} 
          />

          <label htmlFor=''>City</label>
          <input
            type='text'
            name='city'
            id=''
            className='form-control'
            onChange={e=>setObj({...obj,city:e.target.value
            })}
            value={obj.city} 
          />

          <button className='btn btn-primary mt-3' >Update Data</button>
        </form>
      </div>
    </>
  );
};

export default Update;
