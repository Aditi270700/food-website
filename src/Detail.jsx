import './Detail.css'
import React from "react";
import  axios from "axios"
import { useEffect, useState } from "react"
const Detail = () =>{
     let [jsondata,setData] = useState([])

     let [frmvisible,setfrmvisible] = useState(false)
let [edition,setEdition] = useState({})

 const hinput = (e)=>{
    let {name,value} = e.target;
    setEdition({...edition,[name]:value})
    }

    const finalsubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/class/${edition.id}`,edition)
        .then(r=>alert("inserted"))
    }
   

     const mydel = (id)=>{
        axios.delete(`http://localhost:3000/class/${id}`)
        .then(res=>alert("deleted"))
        }
        useEffect(()=>{
        axios.get('http://localhost:3000/class')
        .then(res=>{
            // console.log(res.data);
            setData(res.data)
        })
    },[mydel])
return(
    <>
    <table className='tab'>
   
    <thead className='table-data'>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>City</th>
        <th>Contact</th>
        <th>Delete</th>
        <th>Edit</th>
    </thead>
 

    <tbody>
    {
        jsondata.map((e)=>(
            <tr className='data'>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>{e.contact}</td>
                <td>{e.city}</td>
                <td><button onClick={()=>mydel(e.id)} className='but'>Delete</button></td>
                <td><button onClick={()=>{setfrmvisible(true),setEdition(e)}} className='but'>Edit</button></td>
            </tr>
        ))
    }
    </tbody>
</table>


<br/><br/>
{frmvisible && (
<div className='contact-form' onSubmit={finalsubmit}>
        <div className='contact' >
          <form className='contact-container'  >
           <div className='cont'>
            <h2>Contact</h2>
            </div>
            <div className='contact-popup-input'>
<input type="text" placeholder='your id' name="id" value={edition.id}  onChange={hinput} />        
<input type="text" placeholder='your name' name="name" value={edition.name}  onChange={hinput} />
<input type="email" placeholder='your email' name="email" value={edition.email}  onChange={hinput}  />
<input type="text" placeholder='your age' name="age" value={edition.age}  onChange={hinput} />
<input type="city" placeholder='your city' name="city" value={edition.city}  onChange={hinput} />
<input type="text" placeholder='your contact' name="contact" value={edition.contact}  onChange={hinput} />
            </div>
            <button className='con'>Submit</button>
           
    
            </form> 
        </div>
        </div>
)}
    </>
)
}
export default Detail