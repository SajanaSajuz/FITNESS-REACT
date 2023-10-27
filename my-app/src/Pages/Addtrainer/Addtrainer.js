import React, { useEffect, useState } from 'react'
import './Addtrainer.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function Addtrainer() {
  const [file, setFile] = useState('')
  const addItem = (e) => {
    e.preventDefault()
    console.log(file)
   
  }


  const [addtrainer, setAddtrainer] = useState({

    Username: '',
    Email: '',
    Password: '',
    TrainerName: '',
    Phone: '',
    Designation: '',
    Address: '',
    Gender: '',
    Class: '',
    Classdetails: '',
    Image: ''
  })
  console.log(file, addtrainer);
  const inputChange = (event) => {
    const { name, value } = event.target
    setAddtrainer({ ...addtrainer, [name]: value })
  }

  const navigate = useNavigate()

  // const loginid = localStorage.getItem('Id')
  // useEffect(()=>{
  //   if(loginid==null){
  //     navigate('/Login')
  //   }
  // })


  const [formError, setFormError] = useState({})
  console.log(formError);
  const validate = (values) => {

    var error = {}


    if (!values.Username) {
      error.Username = "Enter Username"
    }
    if (!values.Password) {
      error.Password = "Enter Password"
    }
    if (!values.Email) {
      error.Password = "Enter Password"
    }
    if (!values.Phone) {
      error.Phone = "Enter Password"
    }

    if (!values.Gender) {
      error.Gender = "Enter Password"
    }
    if (!values.Address) {
      error.Address = "Enter Password"
    }
    if (!values.TrainerName) {
      error.TrainerName = "Enter Password"
    }
    if (!values.Class) {
      error.Class = "Enter class"
    }
    if (!values.Classdetails) {
      error.Classdetails = "Enter class details"
    }
    if (!values.Image) {
      error.Image = "choose profile pic"
    }


    return error
  }


















  const submit = (event) => {
    event.preventDefault() //page reload aavathe irikan
    setFormError(validate(addtrainer))
    if (Object.keys(formError).length == 0) { //errors undo ille check aakan,ethra length undennum



       
        const data = new FormData()
        const filename = file.name
        data.append("filename", filename)
        data.append("file", file)
        data.append("Username", addtrainer.Username)
        data.append("Email", addtrainer.Email)
        data.append("Password", addtrainer.Password)
        data.append("TrainerName", addtrainer.TrainerName)
        data.append("Phone", addtrainer.Phone)
        data.append("Designation", addtrainer.Designation)
        data.append("Address", addtrainer.Address)
        data.append("Gender", addtrainer.Gender)
        data.append("Class", addtrainer.Class)
        data.append("Classdetails", addtrainer.Classdetails)
        data.append("Image", addtrainer.Image)
  
  
      


      // to connect react and node
      axios.post("http://localhost:5000/trainer", data).then((response) => {

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












  console.log(addtrainer);
  return (
    <>
      <fieldset>

        <legend><h3>Add Trainer</h3></legend>

        <input type="text" name="Username" onClick={() => { setFormError({ ...formError, Username: "" }) }} onChange={inputChange} placeholder="Username " />
        <span style={{ color: formError.Username ? "red" : "" }}>{formError.Username}</span>





        {/* <span style={{ color: formError.filename ? "red" : "" }}>{formError.filename}</span> */}



        <input type="text" name="Password" onChange={inputChange} onClick={() => { setFormError({ ...formError, Password: "" }) }} placeholder="Password" />
        <span style={{ color: formError.Password ? "red" : "" }}>{formError.Password}</span>

        <input type=" text" name="TrainerName" onChange={inputChange} onClick={() => { setFormError({ ...formError, TrainerName: "" }) }} placeholder=" TrainerName" />
        <span style={{ color: formError.TrainerName ? "red" : "" }}>{formError.TrainerName}</span>

        <input type="file" id="myFile" name="Image" onChange={(event) => { console.log(event.target.files); setFile(event.target.files[0]); setAddtrainer({ ...addtrainer, 'Image': event.target.files[0].name }) }} onClick={() => { setFormError({ ...formError, Image: "" }) }}></input>
        <span style={{ color: formError.Image ? "red" : "" }}>{formError.Image}</span>

        <input type="text" name="Email" onClick={() => { setFormError({ ...formError, Email: "" }) }} onChange={inputChange} placeholder="Email" />
        <span style={{ color: formError.Email ? "red" : "" }}>{formError.Email}</span>


        <input type="text" name="Phone" onChange={inputChange} onClick={() => { setFormError({ ...formError, Phone: "" }) }} placeholder="Phone" />
        <span style={{ color: formError.Phone ? "red" : "" }}>{formError.Phone}</span>

        {/* <input type="text" name="Designation" onChange={inputChange} onClick={() => { setFormError({ ...formError, Designation: "" }) }} placeholder="Designation" />
        <span style={{ color: formError.Designation ? "red" : "" }}>{formError.Designation}</span> */}

        <input type="text" name="Address" onChange={inputChange} onClick={() => { setFormError({ ...formError, Address: "" }) }} placeholder="Address" />
        <span style={{ color: formError.Address ? "red" : "" }}>{formError.Address}</span>

        <input type="text" name="Gender" onChange={inputChange} onClick={() => { setFormError({ ...formError, Gender: "" }) }} placeholder="Gender" />
        <span style={{ color: formError.Gender ? "red" : "" }}>{formError.Gender}</span>


        <input type="text" name="Class" onChange={inputChange} onClick={() => { setFormError({ ...formError, Class: "" }) }} placeholder="class" />
        <span style={{ color: formError.Class ? "red" : "" }}>{formError.Class}</span>


        <input type="text" name="Classdetails" onChange={inputChange} onClick={() => { setFormError({ ...formError, Classdetails: "" }) }} placeholder="classdetails" />
        <span style={{ color: formError.Classdetails ? "red" : "" }}>{formError.Classdetails}</span>

        <form action="#">

          <button href="#"><i class="fa fa-facebook"></i>Facebook</button>
          <button href="#"><i class="fa fa-google-plus"></i>Google +</button>
          <button href="#"><i class="fa fa-twitter"></i>Twitter</button>
        </form>
        <input type="submit" onClick={submit} value="Submit"></input>
      </fieldset>
      <ToastContainer />


    </>
  )
}
