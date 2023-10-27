import React from 'react'
import "../Diet/Diet.css"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
export default function Diet() {
    const[file,setFile]=useState('')

      const [diet,setDiet]=useState({

        DietName: '',
        Type_of_program: '',
        Current_weight: '',
        Goal_weight: '',
        Foods_include: '',
        Food_restricted: '',
        Duration: '',
        Image:''
      
})

const inputChange = (event) => {
    const { name, value } = event.target
    setDiet({ ...diet, [name]: value })
  }



  const [formError, setFormError]= useState({})
 console.log(formError);
 const validate =(values)=>{
 
  var error= {}


  if (!values.DietName) {
    error.DietName = "Enter DietName" 
}
if (!values.Type_of_program) {
    error.Type_of_program = "Enter Type of program" 
}
if (!values.Current_weight) {
  error.Current_weight = "Enter Current weight" 
}
if (!values.Goal_weight) {
  error.Goal_weight = "Enter Goal weight" 
}
if (!values.Foods_include) {
  error.Foods_include = "Enter Foods include" 
}
if (!values.Food_restricted) {
  error.Food_restricted = "Enter Food restricted" 
}
if (!values.Duration) {
  error.Duration = "Enter Duration" 
}
if (!values.Image) {
  error.Image = "select Image" 
}



return error
 }

 const submit = (event) => {
    event.preventDefault()
    setFormError(validate(diet))
    if (Object.keys(formError).length == 0) {



        const data = new FormData()
        const filename = file.name
        data.append("name", filename)
        data.append("file", file)
        data.append("DietName", diet.Price)
        data.append("Type_of_program", diet.Type_of_program)
        data.append("Current_weight", diet.Current_weight)
        data.append("Goal_weight", diet.Goal_weight)
        data.append("Foods_include", diet.Foods_include)
        data.append("Food_restricted", diet.Food_restricted)
        data.append("Duration", diet.Duration)
        data.append("Image", diet.Image)



        axios.post("http://localhost:5000/diet",data).then((response) => {
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
  console.log(diet);
    return (
        <>

            <div  class="productSection">
                <div class="info">
                    <img src="./Images/diet.jpg" height="610px" width="500px" />
                </div>
                <form action="#" method="POST" class="productform" name="productform">
                    <h2>ADD PRODUCT</h2>
                    <ul class="noBullet">
                        <li>
                            <input type="text" class="inputFields" id="productname"  onClick={() => { setFormError({ ...formError, DietName: "" }) }}onChange={inputChange} name="DietName" placeholder="DietName " />
                        </li>
                        <li>
                            <label for="price"></label>
                            <input type="text" class="inputFields" id="price"   onClick={() => { setFormError({ ...formError, Type_of_program: "" }) }}onChange={inputChange} name="Type_of_program" placeholder="Type of program"  />
                        </li>
                        <li>
                            <label for="Image"></label>
                            <input type="file" id="myFile" name="Image"  onChange={(event) => {  setFile(event.target.files[0]); setDiet({ ...diet, Image: event.target.files[0].name }) }} onClick={() => { setFormError({ ...formError, Image: "" }) }}></input>
                  </li>
                        <li>
                            <label for="price"></label>
                            <input type="text" class="inputFields" id="price"  onClick={() => { setFormError({ ...formError, Current_weight: "" }) }}onChange={inputChange} name="Current_weight" placeholder="Current weight"  />
                        </li>
                        <li>
                            <label for="price"></label>
                            <input type="text" class="inputFields" id="price" onClick={() => { setFormError({ ...formError, Goal_weight: "" }) }} onChange={inputChange} name="Goal_weight" placeholder="Goal weight"  />
                        </li>

                        <li>
                            <label for="description"></label>
                            <input type="text" class="inputFields" id="description"  onClick={() => { setFormError({ ...formError, Foods_include: "" }) }}onChange={inputChange} name="Foods_include" placeholder="Foods include"  />
                        </li>

                        <li>
                            <label for="description"></label>
                            <input type="text" class="inputFields" id="description" onClick={() => { setFormError({ ...formError, Food_restricted: "" }) }} onChange={inputChange} name="Food_restricted" placeholder=" Food restricted" />
                        </li>
                        <li>
                            <label for="description"></label>
                            <input type="text" class="inputFields" id="description"  onClick={() => { setFormError({ ...formError, Duration: "" }) }}onChange={inputChange} name="Duration" placeholder="Duration"  />
                        </li>

                        <li id="center-btn">
                            <input type="submit" id="add-btn"  onClick={submit} name="add" alt="ADD" value="ADD" />
                        </li>
                    </ul>
                </form>
            </div>
            <ToastContainer/>





















        </>
    )
}
