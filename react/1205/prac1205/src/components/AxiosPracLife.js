import {useEffect,useState} from "react"
import axios from 'axios';

function AxiosPracLife () {

  const [post,setPost] =useState([])

  const axiosData = async () =>{
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(res.data)
    } catch (err) {

    };
  }
    useEffect(()=>{
      setTimeout(()=>{
        axiosData()
  
      },2000)
  
    })
  return(
    <>
    <h2 className="hd">실습1-3</h2>
    <div >
     {post.length <=0
     ?"Loding..."
     : post.map((value) => {
        return (
        <>
        <br></br>
        <div className="effect">
       <div className="id"> ◎no.{value.id}</div>
       <div className="title"> {value.title}</div>
       <br></br>
       <div className="body"> {value.body}</div>
       </div>
         </>
        )
       })}
    
    </div>
    </>
  )

      }
export default AxiosPracLife;