import React from 'react'
import './Payment.css'
export default function Payment() {
  return (
    <>
    <div id="con">
    <div class="containerp p-0">
        <div class="cardp px-4">
            <p class="h8p py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="textp mb-1">Person Name</p>
                        <input class="form-controlp mb-3" type="text" placeholder="Name" value="Barry Allen"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="textp mb-1">Card Number</p>
                        <input class="form-controlp mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="textp mb-1">Expiry</p>
                        <input class="form-controlp mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="textp mb-1">CVV/CVC</p>
                        <input class="form-controlp mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Pay $243</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    
    </>
  )
}
