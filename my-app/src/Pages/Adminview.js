import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Adminview.css";
export default function Adminview() {
  const [view, setView] = useState([]);
  console.log(view);
  useEffect(() => {
    axios
      .get(`https://crossbody-backend.onrender.com/admin/view-book-requests`)
      .then((response) => {
        setView(response.data.adminview_details);
        console.log(response.data.adminview_details);
      });
  }, []);
  const accept = (id) => {
    axios.get(`https://crossbody-backend.onrender.com/admin/accept/${id}`).then((response) => {
      console.log(response);
      window.location.reload();
    });
    
  };
  const decline = (id) => {
    axios.get(`https://crossbody-backend.onrender.com/admin/decline/${id}`).then((response) => {
      console.log(response);
      window.location.reload();
    }).catch((error) => {
 

    })
  };


  return (
    <>
      <main class="st_viewport">
        <div class="st_wrap_table" data-table_id="0">
          <header class="st_table_header">
            <h2>REQUESTED TRAINERS</h2>
            <div class="st_row">
              <div class="st_column _name">Slno</div>
              <div class="st_column _name">Trainername</div>
              <div class="st_column _name">Username</div>
              <div class="st_column _name">Phone</div>
              <div class="st_column _surname">Class</div>
            </div>
          </header>
          {view.map((item, index) => (
            <div class="st_table">
              <div class="st_row">
                <div class="st_column _name">{index}</div>
                <div class="st_column _name">{item.TrainerName}</div>
                <div class="st_column _name">{item.Name}</div>
                <div class="st_column _name">{item.Phone}</div>
                <div class="st_column _surname">{item.Class}</div>

                {item.status == 0 ? (
                    <>
                  <button onClick={()=>{accept(item._id)}}>Accept</button>
                  <button onClick={()=>{decline(item._id)}}>Decline</button>
                  </>
                ) : (
                    item.status == 1 ? (
                  <button>Accepted</button>
                    ):(
                        <p>Request Rejected</p>
                    )
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
