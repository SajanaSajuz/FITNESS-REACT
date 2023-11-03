import React, { useEffect, useState } from 'react'
import './Addtocart.css';
import axios from 'axios';
export default function Addtocart() {
    const [cart, setCart] = useState([]);
    const token = localStorage.getItem("token")
  const [total, setTotal] = useState(0);
 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/productbook/viewcart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCart(response.data.productbook_details);
       setTotal(response.data.Total_amount);

      });
  }, []);
  console.log(cart);
  const increment = (id) => {
    axios.get(`http://localhost:5000/productbook/increment/${id}`).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  const decrement = (id) => {
    axios
      .get(`http://localhost:5000/productbook/decrement/${id}`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  };
  return (
    <>
      <div class="container bg-white mt-5 p-3 text-center rounded cartg">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="product-details mr-2">

                    <hr/>
                    <h6 class="mb-0">Shopping cart</h6>
                    <div class="d-flex justify-content-between"><span>You have {cart.length} items in your cart</span>
                        <div class="d-flex flex-row align-items-center"><span class="text-black-50">No of items</span>
                            <div class="price ml-2"><span class="mr-1">{cart.length}</span></div>
                        </div>
                    </div>
                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu text-danger" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item text-danger" href="#">Action</a>
    <a class="dropdown-item text-danger" href="#">Another action</a>
    <a class="dropdown-item text-danger" href="#">Something else here</a>
  </div>
</div>
                    {cart.map((item, index) => (
                    <div class="d-flex justify-content-between boxcard align-items-center mt-3 p-2 items rounded">
                                                   <div class="ml-2"><span class="font-weight-bold d-block">{index}</span><span class="spec"></span></div>
                        <div class="d-flex flex-row"><img class="rounded" src={`/Images/${item.Image}`} width="40"/>
                            <div class="ml-2"><span class="font-weight-bold d-block">{item.Productname}</span><span class="spec"></span></div>
                        </div>
                        <div class="d-flex flex-row align-items-center"><span class="d-block">
                        <div class="d-flex flex-row align-items-center qty">
                    <i
                      class="fa fa-minus text-dark"
                      onClick={() => {
                        decrement(item._id);
                      }}
                      
                    ></i>
                    <h5 class="text-grey mt-1 mr-1 ml-1">{item.quantity}</h5>
                    <i
                      class="fa fa-plus text-dark"
                      onClick={() => {
                        increment(item._id);
                      }}
                
                    ></i>
                  </div>
                            </span><span class="d-block ml-5 font-weight-bold">{item.singleamount}</span></div>
                    </div>
                    ))}
                </div>
                <div class="d-flex flex-row align-items-center"><span class="text-black-50">Total Amount</span>
                       <span class=" price">  :{total}</span>
                        </div>
               

            </div>
            
 
          
            {/* <div class="col-md-4">
                <div class="payment-info">
                    <div class="d-flex justify-content-between align-items-center"><span>Card details</span><img class="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30"/></div><span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>

<label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png"/></span> </label>

<label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png"/></span> </label>


<label class="radio"> <input type="radio" name="card" value="payment"> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png"/></span> </label>
                    <div><label class="credit-card-label">Name on card</label><input type="text" class="form-control credit-inputs" placeholder="Name"/></div>
                    <div><label class="credit-card-label">Card number</label><input type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000"/></div>
                    <div class="row">
                        <div class="col-md-6"><label class="credit-card-label">Date</label><input type="text" class="form-control credit-inputs" placeholder="12/24"/></div>
                        <div class="col-md-6"><label class="credit-card-label">CVV</label><input type="text" class="form-control credit-inputs" placeholder="342"/></div>
                    </div>
                    <hr class="line"/>
                    <div class="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div>
                    <div class="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div>
                    <div class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>$3020.00</span></div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>$3020.00</span><span>Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></button></div>
            </div> */}
        </div>
    </div>
    </>
  )
}
