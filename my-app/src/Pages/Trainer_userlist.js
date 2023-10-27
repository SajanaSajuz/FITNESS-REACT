import React, { useEffect, useState } from 'react'
import './Trainer_userlist.css'
import axios from 'axios'
export default function Trainer_userlist() {
  const token = localStorage.getItem("token")
  const [view, setView] = useState([])
  console.log(view)
    useEffect(() => {

        axios.get(`http://localhost:5000/trainer/traineruserdetails`,{
        'headers':{
          'Authorization': `Bearer ${token}`
        }
       }).then((response)=>{
        setView(response.data.user_details)
        console.log(response.data.user_details);

      })
      
    
      },[])
  return (
    <>
    
      <main class="st_viewport">
  <div class="st_wrap_table" data-table_id="0">
    <header class="st_table_header">
      <h2>BOOKED USERS DETAILS</h2>
      <div class="st_row">
       
        <div class="st_column _name">Slno</div>
        <div class="st_column _name">Name</div>
        <div class="st_column _surname">Phone</div>
        <div class="st_column _surname">Gender</div>
      </div>
    </header>
    {view.map((item,index) => (
    <div class="st_table">
      <div class="st_row">
        
        <div class="st_column _name">{index}</div>
        <div class="st_column _name">{item.Name}</div>
        <div class="st_column _surname">{item.Phone}</div>
        <div class="st_column _surname">{item.Gender}</div>
      
      </div>
    </div>
       ))}
    </div>
    </main>
  
    </>
  )
}
