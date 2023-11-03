import React, { useEffect } from 'react'
import './Singleproduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { productSingleView } from '../REDUX/slices/productslices'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
export default function Singleproduct() {
    const { id } = useParams()
    console.log(id);
    const {idproduct} = useSelector((state)=>state.productuser)
    const dispatch =useDispatch()
    const token = localStorage.getItem("token")
 
    console.log(idproduct);
    useEffect(() => { 
        dispatch(productSingleView(id))
     
       }, [])
       const book=(bookedproduct)=>{
        const product = {
          product_id:bookedproduct,
        }
       axios.post(`http://localhost:5000/productbook/cart`,product,{
        'headers':{
          'Authorization': `Bearer ${token}`
        }
       }).then((response)=>{
        console.log(response);
        toast.success(response.data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
   
    
       })
      
      }
  return (
    <>
    <div class="container">
    <div id="demo" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="cardcart">
                   
                    <div class="rowcart">
                        <div class="colcart-md-6 text-center align-self-center"> <img class="imgcart-fluid" src={`/Images/${idproduct.Image}`}/>
                        </div>
                        <div class="colcart-md-6 infocart">
                            <div class="rowcart title">
                                <div class="colcart ml-5">
                                    <h2>{idproduct.Productname}</h2>
                                </div>
                                <div class="colcart ml-5" id="detailscart"><a class="acart" href="#"></a></div>
                            </div>
                            <p>{idproduct.Description}</p> <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span> <span class="fa fa-star-half-full"></span>
                            <span id="reviews">1590 Reviews</span>
                            
                            <div class="rowcart price">
                                
                               
             <label class="radiocart"> <input type="radio" name="size1" value="small"/> <span>  <div class="rowcart">{idproduct.Price}</div> </span> </label>
             <div class="colcart text-right align-self-center"> <button class="btncart" onClick={()=>{book(idproduct._id)}}>Add to cart</button> </div>
                                {/* <label class="radiocart"> <input type="radio" name="size1" value="large"/> <span> <div class="rowcart"><big><b>4.4 oz.</b></big></div> <div class="rowcart">$21.95</div> </span> </label> */}
                            </div>
                        </div>

                    </div>

                        {/* <div class="colcart"> <a class="carousel-control-prev" href="#demo"
                                data-slide="prev"><i class="fa fa-arrow-left"></i></a> <a class="carousel-control-next"
                                href="#demo" data-slide="next"><i class="fa fa-arrow-right"></i></a> </div> */}


                
                </div>
            </div>
           
        </div>
    </div>
</div>
<ToastContainer/>
    </>
  )
}
