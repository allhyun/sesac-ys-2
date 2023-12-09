import { useEffect,useState } from "react";
import {useParams,useSearchParams,useNavigate } from "react-router-dom"

export default function ProductDetail(){
  const {id} =useParams()
  console.log(id)
  
  
   
  // const params = useParams()

  // product/:id/:name
  // params-> { id:value, name:value}
  
  // ~~~?id=2&name=dahyun
  // 이라는 쿼리를 가지고 오고 싶을때 사용
  const [query,setQuery]=useSearchParams();
  // ~~~?name=dahyun
  console.log(query) //URLSearchParams {size :1}
  console.log(query.get("name")) //dahyun
  // query=>{}


  // Link 컴포넌트를 이용하지않고, js 함수 내부에서 페이지를 이동시키는 코드를 갓성해야할때
  const navigator =useNavigate();

const [product,setProduct]=useState()
const [error,setError]=useState()



  const getProduct=async ()=>{
    try{
      // 오류가 날 수 잇는 코드를 try안에 넣는다.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res.ok){
      const prod= await res.json()
      setProduct(prod)

    }else {
      throw Error("존재하지 않는 상품입니다.")
    } 
    setProduct(await res.json())
    } catch(error){
      console.log(error.message)
      // try안에서 오류가 발생하면 catch로 이동함

    }
  };
  useEffect(()=>{
    getProduct();
  },[])

  return <>
  <div>
    여기는 상품페이지
  </div>
  <button onClick={()=>navigator(-1)}>목록으로 이동</button>
  <button onClick={()=>navigator(2)}>다음페이지 이동</button>

  <button onClick={()=>navigator("/")}>홈으로 이동</button>


  {/* set */}
  {/* <button onClick={()=>setQuery({name:"codee"})}>setQuery 테ㅛㅡ트</button> */}
  
  
  {product ? (
    <ul>
      <li>번호{product.id}</li>
      <li>상품명{product.title}</li>

    </ul>
  ):(
<div>{error}</div>
  )}
  
  </>
}