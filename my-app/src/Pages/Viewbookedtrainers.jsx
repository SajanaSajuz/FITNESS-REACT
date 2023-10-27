import React, { useEffect, useState } from 'react'
import '../Pages/Viewbookedtrainer.css'
import axios from 'axios'
export default function Viewbookedtrainers() {
    const token = localStorage.getItem("token")
  const [view, setView] = useState([])
  console.log(view)
    useEffect(() => {
        axios.get(`http://localhost:5000/book/viewbook`,{
        'headers':{
          'Authorization': `Bearer ${token}`
        }
       }).then((response)=>{
        setView(response.data.viewbook_details)
        console.log(response.data.viewbook_details);

       })
      
      },[])
    
  return (
    <>
<div className="row">
    {view.map((item) => (

      <div class="col-md-3">
      <div class="wsk-cp-product">
        <div class="wsk-cp-img"><img src={`Images/${item.Image}`} alt="Product" class="img-responsive" /></div>
        <div class="wsk-cp-text">
          <div class="category">
            <span>{item.Trainername}</span>
          </div>
          <div class="title-product">
            <h3>{item.Phone}</h3>
          </div>
          <div class="description-prod">
            <p>{item.Class}</p>
          </div>
          {/* <div class="card-footer">
            <div class="wcf-left"><span class="price">Rp500.000</span></div>
            <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
          </div> */}
        </div>
      </div>
    </div>
    ))}
    </div>
    
    </>
  )
}
