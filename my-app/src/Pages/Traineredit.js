import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function Traineredit() {
    const {id}=useParams()

    const [trainer, setTrainer] = useState({})
    const url = `http://localhost:5000/trainer/trainerdetails/${id}`
    console.log(id);
    useEffect(() => { 
        axios.get(url).then((response) => {
          setTrainer(response.data.trainer_details)
          console.log(response);
        })
    
      }, [])

console.log(trainer);


// const inputChangeedit = (event) => {
//   const { name, value } = event.target
//   setTrainer({ ...trainer, [name]: value })
// }


      const [file, setFile] = useState('')
      const addItem = (e) => {
        e.preventDefault()
        console.log(file)
       
      }
    
    
      const [addtrainer, setAddtrainer] = useState({
    
        
        Email: '',
        
        TrainerName: '',
        Phone: '',
        Address: '',
        Gender: '',
        Class: '',
        Classdetails: '',
        Image: ''
      })
      console.log(file, addtrainer);
      const inputChange = (event) => {
        const { name, value } = event.target
        setTrainer({ ...trainer, [name]: value })
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
    
    
       
      
        if (!values.Email) {
          error.Password = "Enter Password"
        }
        if (!values.Phone) {
          error.Phone = "Enter Phone"
        }
    
        if (!values.Gender) {
          error.Gender = "Enter Gender"
        }
        if (!values.Address) {
          error.Address = "Enter Address"
        }
        if (!values.TrainerName) {
          error.TrainerName = "Enter TrainerName"
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
        setFormError(validate(trainer))
        if (Object.keys(formError).length == 0) { //errors undo ille check aakan,ethra length undennum
    
    
    
           
            const data = new FormData()
            const filename = file.name
            data.append("name", filename)
            data.append("file", file)
  
            data.append("Email",trainer.Email)
            
            data.append("TrainerName", trainer.TrainerName)
            data.append("Phone",trainer.Phone)
            data.append("Address",trainer.Address)
            data.append("Gender", trainer.Gender)
            data.append("Class", trainer.Class)
            data.append("Classdetails", trainer.Classdetails)
            data.append("Image", trainer.Image)
            data.append("_id", trainer._id)
      
      
          
    
    
          // to connect react and node
          axios.post("http://localhost:5000/trainer/update-trainer",data).then((response) => {
    
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
    
            // console.log(error);
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

<legend><h3>EDIT TRAINER</h3></legend>






{/* <span style={{ color: formError.filename ? "red" : "" }}>{formError.filename}</span> */}




<input type=" text" name="TrainerName" onChange={inputChange} onClick={() => { setFormError({ ...formError, TrainerName: "" }) }} placeholder=" TrainerName" value={trainer.TrainerName}  />
<span style={{ color: formError.TrainerName ? "red" : "" }}>{formError.TrainerName}</span>

<input type="file" id="myFile" name="Image" onChange={(event) => { console.log(event.target.files); setFile(event.target.files[0]); setTrainer({ ...trainer, 'Image': event.target.files[0].name }) }} onClick={() => { setFormError({ ...formError, Image: "" }) }}/>
<span style={{ color: formError.Image ? "red" : "" }}>{formError.Image}</span>

<input type="text" name="Email"  onClick={() => { setFormError({ ...formError, Email: "" }) }} onChange={inputChange} placeholder="Email" value={trainer.Email} />
<span style={{ color: formError.Email ? "red" : "" }}>{formError.Email}</span>


<input type="text" name="Phone" onChange={inputChange} onClick={() => { setFormError({ ...formError, Phone: "" }) }} placeholder="Phone" value={trainer.Phone} />
<span style={{ color: formError.Phone ? "red" : "" }}>{formError.Phone}</span>


<input type="text" name="Address" onChange={inputChange} onClick={() => { setFormError({ ...formError, Address: "" }) }} placeholder="Address" value={trainer.Address} />
<span style={{ color: formError.Address ? "red" : "" }}>{formError.Address}</span>

<input type="text" name="Gender" onChange={inputChange} onClick={() => { setFormError({ ...formError, Gender: "" }) }} placeholder="Gender"  value={trainer.Gender}/>
<span style={{ color: formError.Gender ? "red" : "" }}>{formError.Gender}</span>


<input type="text" name="Class" onChange={inputChange} onClick={() => { setFormError({ ...formError, Class: "" }) }} placeholder="class" value={trainer.Class}/>
<span style={{ color: formError.Class ? "red" : "" }}>{formError.Class}</span>


<input type="text" name="Classdetails" onChange={inputChange} onClick={() => { setFormError({ ...formError, Classdetails: "" }) }} placeholder="classdetails" value={trainer.Classdetails} />
<span style={{ color: formError.Classdetails ? "red" : "" }}>{formError.Classdetails}</span>

{/* <form action="#">

  <button href="#"><i class="fa fa-facebook"></i>Facebook</button>
  <button href="#"><i class="fa fa-google-plus"></i>Google +</button>
  <button href="#"><i class="fa fa-twitter"></i>Twitter</button>
</form> */}
<input type="submit" onClick={submit} value="Submit"></input>
</fieldset>
<ToastContainer />





    </>
  )
}
