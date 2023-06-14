import React, { useContext } from "react";
import "./Header.css";
import { useStateValue } from "../../Contextapi/CartContext";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Contextapi/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const [{ basket }] = useStateValue();
    const {items} = useContext(CartContext)
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();



  const Navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-title" onClick={() => Navigate("/")}>
        <img src="../images/priceoye.png" style={{color:"white"}} />
      </div>
      <div className="header-search">
        <input   style={{fontSize:"14px"}}
          className="header__searchinput"
          type="text"
          placeholder="Search..."
        />
         <i style={{color:"#48AFFF", fontSize:"18px",cursor:"pointer"}} class="fa-solid fa-microphone"></i>
      </div>



     {isAuthenticated && <p style={{color:"white"}}>{user.username}</p>}

     {isAuthenticated ? (
      <>
      <div style={{display:"flex", alignItems:"center", gap:"10px"}}>

    <div className="header-icon" style={{display:"flex", alignItems:"center", justifyContent:"center",cursor:"pointer"}}    onClick = {()=> Navigate("/Cart")}>
        <i style={{color:"white"}} class="fa-solid fa-cart-shopping"></i>
        <span style={{color:"white", position:"relative", top:"-13px"}}>{items.length}</span>
        </div>

      <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      </div>
      </>
     ) : 

     <button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>
    }
{/* 
<div className="header-icon" style={{display:"flex", alignItems:"center", justifyContent:"center",cursor:"pointer"}}    onClick = {()=> Navigate("/Cart")}>
        <i style={{color:"white"}} class="fa-solid fa-cart-shopping"></i>
        <span style={{color:"white", position:"relative", top:"-13px"}}>{items.length}</span>
        </div> */}


{/* <div style={{display:"flex", gap:"10px"}}>
  
  <button className="login-button" onClick={()=>Navigate("/login")}>Log In</button>
  <button className="login-button" onClick={()=>Navigate("/signup")}>Register</button>

</div> */}
    </header>
  );
};

export default Header;
