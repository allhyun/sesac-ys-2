import {useEffect,useState} from "react"
import { useParams} from "react-router-dom"


export default function PrPhoto (){


  const [photo, setPhoto] = useState(null)
  const {id} = useParams()
  const [error,setError]=useState()
  const getPhotos = async() =>{
    try{
      const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      if(res.ok){
      const prod=await res.json();
      setPhoto(prod)
    } else {
      throw Error("no")
    } 
    setPhoto(await res.json())
  }catch (error) {
      console.log(error.message)
    }

  };

  useEffect(()=>{

    getPhotos();
  },[]  )
  return (
    <>
     <div> 여기는 사진 페이지 </div>
     {photo ? (
    <ul>
      <li>번호{photo.id}</li>
      <li>상품명{photo.title}</li>
      <img src ={photo.url} alt="profile"/>
     </ul>
  ):(
<div>{error}</div> 
  )}
  
    </>
  )
}