import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function Product() {

  const [file, setFile] = useState('')
 

  const [product,setProduct]= useState({

    Productname: '',
    Price: '',
    Description: '',
    Image: ''
    
   
  
})
console.log(product);
const inputChange = (event) => {
const { name, value } = event.target
setProduct({ ...product, [name]: value })
}

const [formError, setFormError]= useState({})
console.log(formError);
const validate =(values)=>{

var error= {}


if (!values.Productname) {
 error.Productname = "Enter Productname" 
}
if (!values.Price) {
 error.Price = "Enter  Price" 
}

if (!values.Description) {
error.Description = "Enter Description" 
}
if (!values.Image) {
  error.Image = "Enter Image" 
  }




return error
}

const submit = (event) => {
event.preventDefault()
setFormError(validate(product))
if (Object.keys(formError).length == 0) {

  const data = new FormData()
  const filename = file.name
  data.append("filename",filename)
  data.append("file",file)
  data.append("Price",product.Price)
  data.append("Description",product.Description)
  data.append("Productname",product.Productname)
  data.append("Image",product.Image)








    axios.post("http://localhost:5000/admin/addproduct",data).then((response) => {
        console.log(response);
        
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}).catch((error) => {

    console.log(error);
    toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
})
}
}
console.log(product);
  return (
    <>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>CLASSES</h3>

                <form class="requires-validation" novalidate>

                  <div class="col-md-12">
                    <input class="form-control" type="text" name="Productname" placeholder="Product  Name" onClick={() => { setFormError({ ...formError, Productname: "" }) }} onChange={inputChange} />
                    <div class="valid-feedback">Username field is valid!</div>
                    <div class="invalid-feedback">Username field cannot be blank!</div>
                  </div>

                  <div class="col-md-12">
                    <input class="form-control" type="text" name="Description" placeholder="Description" onClick={() => { setFormError({ ...formError, Description: "" }) }} onChange={inputChange} />
                    <div class="valid-feedback">Email field is valid!</div>
                    <div class="invalid-feedback">Email field cannot be blank!</div>
                  </div>
                  <div class="col-md-12">
                    <input class="form-control" type="text" name="Price" placeholder="  Product Price" onClick={() => { setFormError({ ...formError, Price: "" }) }} onChange={inputChange} />

                  </div>
                  <div class="col-md-12">
                  <input type="file" id="myFile" name="Image"  onChange={(event) => {  setFile(event.target.files[0]); setProduct({ ...product, Image: event.target.files[0].name }) }} onClick={() => { setFormError({ ...formError, Image: "" }) }}></input>
                  </div>
                  







                  <div class="form-button mt-3">
                    <button id="submit" type="submit" onClick={submit} class="btn btn-primary">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


<ToastContainer/>

    </>
  )
}
