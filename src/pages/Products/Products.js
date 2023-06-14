import React, { useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import { data } from '../../api/Data';
import Card from '../../components/Card/Card';
import Fetch from '../Fetch/Fetch';
import { auth, db } from '../../Firebase/Firebase';
import Add from '../../components/Extra/Add';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import './Products.css'






const Products = () => {
  return(
<>
<Header />
<Banner />

 
<div class="right mx-auto">
<div class="row gy-2 ">
        <div class="col-lg-3 col-md-4 col-sm-6 ">
            <div class="card">
                <img class="card-img"src="/images/mobile.jpg" />
                <p class="card-des">Apple Iphone 14 Pro </p>
              <p> Rs 514,999</p>
            </div>
       </div>

       <div class="col-lg-3 col-md-4 col-sm-6 ">
        <div class="card">
            <img class="card-img"src="/images/mobile.jpg" />
            <p class="card-des">Apple Iphone 14 Pro </p>
          <p> Rs 514,999</p>
        </div>
   </div>

   <div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>

<div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>

<div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>
 
<div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>

<div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>


<div class="col-lg-3 col-md-4 col-sm-6">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>


<div class="col-lg-3 col-md-4 col-sm-6 ">
    <div class="card">
        <img class="card-img"src="/images/mobile.jpg" />
        <p class="card-des">Apple Iphone 14 Pro </p>
      <p> Rs 514,999</p>
    </div>
</div>

    </div>
</div>

{/* <Login />
<Signup /> */}

 </>

  )

}

export default Products