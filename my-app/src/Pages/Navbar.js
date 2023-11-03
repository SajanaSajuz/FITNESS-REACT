import React from "react";
import { Link } from "react-router-dom"; //npm i link- react
import '../Pages/Navbar.css'
export default function Navbar() {
  const role = localStorage.getItem("Role");

  return (
    <>
      {role == 3 ? ( //conditional rendering
        <div class="wrapper mb-3">
          <header>
            <nav>
              <div class="menu-icon">
                <i class="fa fa-bars fa-2x"></i>
              </div>
              <div class="logo">CROSSBODY</div>
              <div class="menu">
                <ul>
                  <Link to={"/Home"}>
                    <li>Home</li>
                  </Link>
                  <Link to={"/Class"}>
                    <li>Classes</li>
                  </Link>
                  <Link to={"/trainer-userlist"}>
                    <li>Orders</li>
                  </Link>
                  <Link to={"/ViewDiet"}>
                    <li>Diet Plan</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      ) : role == 2 ? (
        <div class="wrapper">
          <header>
            <nav>
              <div class="menu-icon">
                <i class="fa fa-bars fa-2x"></i>
              </div>
              <div class="logo">CROSSBODY</div>
              <div class="menu">
                <ul>
                  <Link to={"/Home"}>
                    <li>Home</li>
                  </Link>
                  <Link to={"/about"}>
                    <li>About</li>
                  </Link>
                  <div class="dropdown">
                    <button class="dropbtn">
                      Trainers
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content"  >
                      <Link class="link" to={"/viewtrainers"}>
                        View Trainers
                      </Link>
                      <Link class="link" to={"/user-trainerlist"}>
                        My Bookings
                      </Link>
                    </div>
                  </div>

                  {/* <Link to ={'/viewproducts'}><li>Shop</li></Link> */}
                  {/* <div class="dropdown">
                    <button class="dropbtn">
                      Shop
                      <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content" >
                      <Link class="link" to={"/viewproducts"}>
                        View Products
                      </Link>
                      <Link class="link" to={"/addtocart"}>
                        My Orders
                      </Link>
                    </div>
                  </div> */}

                  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu text-primary" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

                  <Link to={"/Logout"}>
                    <li>Logout</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      ) : (
        //home
        <div class="wrapper">
          <header id="nav">
            <nav>
              <div class="menu-icon">
                <i class="fa fa-bars fa-2x"></i>
              </div>
              <div class="logo">CROSSBODY</div>
              <div class="menu">
                <ul>
                  <Link to={"/Login"}>
                    <li>Login</li>
                  </Link>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      )}
    </>
  );
}
