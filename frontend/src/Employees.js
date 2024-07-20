import React,{ useState} from 'react'
import axios, {Axios} from 'axios'

const basUrl = 'http://localhost:8081/';
const postCreateUrl = 'api/student/create';

function Employees() {
  const[studentInfo,setValues]= useState({
    firstname:'',
    lastname:'',
    email:'',
    phonenumber :'',
    address:''
  });

  const handleChange=(event)=>{
    setValues({...studentInfo,[event.target.name]:[event.target.value]})
  }

  const handleSubmit=(event) =>{
    event.preventDefault();
    axios.post(`${basUrl}${postCreateUrl}`,studentInfo)
    .then(res => console.log("Registered Sucessfully!!"))
    .catch(err => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      <div>
            <label htmlFor='firstname'>First Name : </label>
            <input type='text' placeholder='Enter the Name' name='firstname'
            onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='lastname'>Last Name : </label>
            <input type='text' placeholder='Enter the Name' name='lastname'
             onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='email'>Email Id : </label>
            <input type='email' placeholder='Enter the Name' name='email'
             onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='phonenumber'>Phone Number : </label>
            <input type='text' placeholder='Enter the Name' name='phonenumber'
             onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor='address'>Address : </label>
            <input type='text' placeholder='Enter the Name' name='address'
             onChange={handleChange}/>
        </div>
          
        <button type='submit'>Sign Up</button>
       
      </form>
      </div>
  )
}
export default Employees;
