import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = (props) => {
  const {updatedatatoapi}=props
 
    const [api, setApi] = useState([]);

     // function to delete data from api
const deletedatafromapi = async(id) => {
  let del=await fetch(`http://127.0.0.1:8000/usertable/${id}`, {

    method: 'DELETE',
    
  })
  del=await del.json()
 
  
};

  async function fetchapi() {
    const url = "http://127.0.0.1:8000/usertable";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setApi(data);
  }
  

  useEffect(() => {
    fetchapi();
  }, [deletedatafromapi]);

  return (
    <>
    <div className='container'>
      <h3 className='display-3 text-center'>Show Data From DB</h3>
      <table className='text-center table border mt-4 table-bordered'>
        <tr>
          <th>
            Id
          </th>
          <th>
          Name
          </th>
          <th>
          Email
          </th>
          <th>
            City
          </th>
          <th>
            Edit
          </th>
          <th>
            Delete
          </th>
        </tr>
        {
          api.map((api) => (
            <tr>
              <td>{api._id}</td>
              <td>{api.name}</td>
              <td>{api.email}</td>
              <td>{api.city}</td>
              <td> <Link to={`/update/${api._id}`} className='btn btn-primary'>Edit</Link></td>

              <td><button onClick={()=>deletedatafromapi(api._id)} className='btn btn-danger'>Delete</button></td>
            </tr>
          ))
        }
      </table>
    </div>
    </>
  );


}

export default Read