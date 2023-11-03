import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch, useSelector } from "react-redux";
import { usertrainer } from '../REDUX/slices/userslices';
import Loader from '../Components/Loader';




export default function Viewtrainer() {


  //to view details 
  // const [view, setView] = useState([])
  // console.log(view)
  //to view details using redux,
  const {viewusertrainer,loading} = useSelector((state)=>state.userview)
  const dispatch =useDispatch()

  useEffect(() => {
    // axios.get("http://localhost:5000/trainer/trainerdetails").then((response) => {
    //   // console.log(response.data.trainer_details)
    //   setView(response.data.trainer_details)
    // })
    //REDUX
    dispatch(usertrainer())
  }, []) //dependencies array 

console.log(viewusertrainer,loading);


  return (
    <>


     
<Navbar/>




        <div class="container" >

          <div class="row">


{loading ? <Loader/> :
viewusertrainer.map((item) => (
              
  <div class="col-sm-3 mt-5" style={{ color: 'white' }}>
    <Link to={`/trainerdetails/${item._id}`}>






    <div class="col mt-5">
      <img src={`/Images/${item.Image}`} height="100%" width="100%"></img>
    </div>
    <div class="col">
      <h1>{item.TrainerName} </h1>
      <p>{item.Email}</p>
      <img src="/Images/icon.png" height="20%" width="60%"></img>
     
    </div>
    </Link>

  </div>
           

        ))
}
           




                </div>

           </div>

</>
            )
}
