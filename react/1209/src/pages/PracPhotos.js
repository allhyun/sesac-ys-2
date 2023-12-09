import { useEffect, useState,  } from "react";
import { Link} from "react-router-dom";

export default function PracPhotos(){
  const [photo,setPhoto]=useState();
  // const {id} = useParams()
  // const [error,setError]=useState("error")
  // const navigator =useNavigate();

  const getPhoto=async()=> {
    try{
    const res= await fetch("https://jsonplaceholder.typicode.com/photos")
    if(res.ok){
      const prod= await res.json()
      setPhoto(prod)
    } else{
      throw Error("에러")
    }
   
  } catch(error){
    // setError(error.message)
  }}
  useEffect(()=>{
    getPhoto();
  },[])

  return <>
  <div>여기는 사진페이지</div>
 
 {photo ? <>
    {photo.map((value)=>(
      <ul key={value.id}>
        
       <li>번호 : {value.id}</li>
       <li>상품명:{value.title}</li>
       <li>상품설명:{value.url}</li>

       <li>
        <Link to={`/photo/${value.id}`}>상세페이지로 이동하기</Link>
       </li>

      </ul>))}</> : <div>Loading...</div>}
  
 
  </>
}