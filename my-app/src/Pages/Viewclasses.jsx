import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classes } from '../REDUX/slices/trainerslices'
import '../Pages/Viewclasses.css'
export default function Viewclasses() {
    const {classview,loading} = useSelector((state)=>state.trainer)
    const dispatch =useDispatch()
    useEffect(() => {
        dispatch(classes())
      }, [])
  return (
  <>
  {classview.map((item) => (
 
  <div class="textc">
   
      <div>
          <h3 class="cross">{item.Classname}</h3>
          <img src="../IMAGES/dumbbell-clipart-etsy-3.png "height="25%" width="25%"/>
          <span class="crosst">{item.Classdetails}
          </span>
          <span class="crosst">{item.Startdate}
          </span><br/>
          <span class="crosst">{item.Enddate}
          </span><br/>
          <span class="crosst">{item.Classtime}
          </span><br/>
          
      </div>
      </div>
      
  ))}
  </>
  );
}
