import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import './Trainerdetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { trainerSingleView } from '../REDUX/slices/userslices'

export default function Trainerdetails() {
  const { id } = useParams()
  const {idtrainer} = useSelector((state)=>state.userview)
  const dispatch =useDispatch()
  const token = localStorage.getItem("token")
  const navigate=useNavigate()
 console.log(idtrainer);
  // const url = `http://localhost:5000/user/user-trainerdetails/${id}`
  useEffect(() => { 
   dispatch(trainerSingleView(id))

  }, [])
  const book=(bookedtrainer)=>{
    const trainer = {
      trainer_id:bookedtrainer
    }
   axios.post(`http://localhost:5000/book/booking`,trainer,{
    'headers':{
      'Authorization': `Bearer ${token}`
    }
   }).then((response)=>{
    console.log(response);
navigate('/trainerOD')

   })
  
  }


  
  return (

    <>


      <div class="containerr mb-5">
        <h1 class="text-primary">Trainer's Details</h1>
        
        <div class="image">
            <img id="pic" src={`/Images/${idtrainer.Image}`}></img>
        </div>
      
      
          <>
            <div class="textt">

              <div>
                <h3 class="cross">{idtrainer.Class}</h3>
                <img src="/Images/dumbbell-clipart-etsy-3.png " height="25%" width="25%"></img>
                <span class="crosst">{idtrainer.Classdetails}<br></br>
                  <br></br>
                  <br></br>

                </span>
                <p>{idtrainer.Gender}</p>
                <p>{idtrainer.Email}</p>
                <p>{idtrainer.Phone}</p>
                <p>{idtrainer.Address}</p>
               
                <p>{idtrainer.TrainerName}</p>
               
                {/* <a href={`/traineredit/${idtrainer._id}`} class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">EDIT</a>
                <a href="" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">DELETE</a> */}
                  <a class="btn btn-secondary btn-lg active" role="button" aria-pressed="true" onClick={()=>{book(idtrainer.Login_id)}}>BOOK APPOINTEMENT</a> 

              </div>
            </div>
          </>
        




      </div>


    </>
  )
}
