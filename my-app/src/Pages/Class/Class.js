import React, { useEffect, useState } from 'react'
import "../Class/Class.css"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function Class() {
    const [classes,setClasses]= useState({

      Classname: '',
      Classdetails: '',
      Startdate: '',
      Enddate: '',
      Classtime: '',
      
       
      
})

const inputChange = (event) => {
    const { name, value } = event.target
    setClasses({ ...classes, [name]: value })
  }

  const [formError, setFormError]= useState({})
  console.log(formError);
  const validate =(values)=>{
  
   var error= {}
 
 
   if (!values.Classname) {
     error.Classname = "Enter Classname" 
 }
 if (!values.Classdetails) {
     error.Classdetails = "Enter  Classdetails" 
 }
 if (!values.Startdate) {
   error.Startdate = "Enter Startdate " 
 }
 if (!values.Enddate) {
   error.Enddate = "Enter Enddate" 
 }
 if (!values.Classtime) {
   error.Classtime = "Enter Classtime" 
 }
 
 

 
 return error
  }

  const navigate = useNavigate()

  // const loginid = localStorage.getItem('Id')
  // useEffect(()=>{
  //   if(loginid==null){
  //     navigate('/Login')
  //   }
  // })
  const submit = (event) => {
    event.preventDefault()
    setFormError(validate(classes))
    if (Object.keys(formError).length == 0) {
        axios.post("http://localhost:5000/trainer/addclass", classes).then((response) => {
            console.log(response.data.message);
            
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
  console.log(classes);
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
                               <input class="form-control" type="text" name="Classname" placeholder="Class Name" onClick={() => { setFormError({ ...formError, TrainerName: "" }) }}  onChange={inputChange}  />
                               <div class="valid-feedback">Username field is valid!</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="text" name="Classdetails"   placeholder="Description"  onClick={() => { setFormError({ ...formError, Description: "" }) }}   onChange={inputChange} />
                                 <div class="valid-feedback">Email field is valid!</div>
                                 <div class="invalid-feedback">Email field cannot be blank!</div>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="text" name="Startdate"  placeholder="Startdate"   onClick={() => { setFormError({ ...formError, Startdate: "" }) }}  onChange={inputChange} />
                             
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="text" name="Enddate"  placeholder="Enddate"   onClick={() => { setFormError({ ...formError, Enddate: "" }) }}  onChange={inputChange} />
                             
                            </div>
                            {/* <div class="col-md-12">
                                <input class="form-control" type="text" name="Email"  placeholder="E-mail Address"  onClick={() => { setFormError({ ...formError, Email: "" }) }}  onChange={inputChange} />
                                 <div class="valid-feedback">Email field is valid!</div>
                                 <div class="invalid-feedback">Email field cannot be blank!</div>
                            </div> */}
                            
                           <div class="col-md-12">
                              <input class="form-control" type="text" name="Classtime" placeholder="  Classtime"  onClick={() => { setFormError({ ...formError, Classtime: "" }) }}  onChange={inputChange} />
                              
                           </div>
                           {/* <div class="col-md-12">
                                <select class="form-select mt-3" required name="Category"  onClick={() => { setFormError({ ...formError, Category: "" }) }}  onChange={inputChange}>
                                      <option selected disabled value="">Category</option>
                                      <option value="jweb">Junior Web Developer</option>
                                      <option value="sweb">Senior Web Developer</option>
                                      <option value="pmanager">Project Manager</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                           </div> */}




                       
                  

                            <div class="form-button mt-3">
                                <button id="submit" type="submit"  onClick={submit} class="btn btn-primary">Register</button>
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
