import React, { useState, useEffect} from 'react'
import Card from '../../components/Card/Card'
import axios from 'axios'
import { data } from '../../api/Data'
import {getBestSeller} from '../../api/Data'


const Fetch = () => {
   
    const [myData, setMyData] = useState(data);
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setMyData(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

    useEffect(() => {
        axios
        .get('data.js')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
          
      }, []);

  return (
    <div>
           {myData.map((item) => {

              return (
                <Card  {...item} />
              ) 
           })}
 
    </div>
  )
}

export default Fetch