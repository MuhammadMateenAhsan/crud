import React from 'react'
import { useNavigate } from 'react-router-dom';
const Create = (props) => {
    const navigate=useNavigate();
    const {handle,handler,senddatatoapi}=props;
  return (
    <>
    <div className='container'>
        <h2 className='display-4 text-center'>Add Data To DB</h2>
        <form action="" className='mt-4 border p-4 rounded' onSubmit={
            (e)=>{
                e.preventDefault()
                senddatatoapi()
                navigate("/read")
            }
        }>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="" className='form-control' onChange={handler} value={handle.name}/>

            <label htmlFor="">Email</label>
            <input type="email" name="email" id="" className='form-control'onChange={handler} value={handle.email}/>

            <label htmlFor="">City</label>
            <input type="text" name="city" id="" className='form-control'onChange={handler} value={handle.city}/>

            <button className='btn btn-primary mt-3'>Save Data</button>
        </form>

    </div>
    </>
  )
}

export default Create