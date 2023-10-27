import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Pages/Viewproduct.css'
import { Link } from 'react-router-dom'
import { userproduct } from '../REDUX/slices/productslices'
import { useDispatch, useSelector } from 'react-redux'
export default function Viewproduct() {
  const {viewproduct} = useSelector((state)=>state.productuser)
  const dispatch =useDispatch()
    
  useEffect(()=>{
    dispatch(userproduct())
   
    
  }, [])
  return (
    <>
  
  <section>
        <div class="container">
        <div class="row g-4 py-5">
            {viewproduct.map((item) => (
              <div id ="productview" class="col-md-4">
                <Link to={`/productdetails/${item._id}`}>
                  <div class="product-single-card">
                    <div class="product-top-area">
                      <div class="product-discount">$55.</div>

                      <div class="product-img">
                        <div class="first-view">
                          <img
                            src={`/images/${item.Image}`}
                            alt="logo"
                            class="img-fluid"
                          />
                        </div>
                        <div class="hover-view">
                        <img
                            src={`/images/${item.Image}`}
                            alt="logo"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                      <div class="sideicons">
                        <button class="sideicons-btn">
                          <i class="fa-solid fa-cart-plus"></i>
                        </button>
                        <button class="sideicons-btn">
                          <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="sideicons-btn">
                          <i class="fa-solid fa-heart"></i>
                        </button>
                        <button class="sideicons-btn">
                          <i class="fa-solid fa-shuffle"></i>
                        </button>
                      </div>
                    </div>
                    <div class="product-info">
                      <h6 class="product-category">
                        <div>{item.Productname}</div>
                      </h6>
                      <h6 class="product-title">
                      <div>{item.Description}</div>
                      </h6>
                      <div class="d-flex align-items-center">
                        <div class="review-star me-1">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star-half-stroke"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>

                        <span class="review-count">(13)</span>
                      </div>
                      <div class="d-flex flex-wrap align-items-center py-2">
                        <div class="old-price">$50.45</div>
                        <div class="new-price">{item.Price}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    </>
  );
}




  {/* <div >
<div class="container" >

    <div class="row">

        {view.map((item) => (

        <div class="col-sm-4" style={{color:'white'}}>
            
            <img src={`/Images/${item.Image}`} alt="" height="400px" width="350px" />
            <br /><br />
            <h6>{item.Productname}</h6>
            <p>{item.Description}</p>
            <h5>{item.Price}</h5>
            
        </div>

        ))}

    </div>
</div>

</div> */}


