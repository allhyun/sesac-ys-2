import {useCallback,useEffect, useState} from 'react'



export default function UseCallbackEx2({ postId }){
  // props를 활용하는 예시
  // https://jsonplaceholder.typicode.com/posts/
  const [post,setPost]=useState();
  const [text,setText]=useState("")
  const fetchData = useCallback(async() => {
    const res =await fetch (
      ` https://jsonplaceholder.typicode.com/posts/${postId}
       `);
       const post = await res.json();
       setPost(post)
  },[postId]);

  useEffect(()=>{
    fetchData();
  },[fetchData])


  // useCallback 함수 안쓸때/..?
  // const fetchData = async() => {
  //   const res =await fetch (
  //     ` https://jsonplaceholder.typicode.com/posts/${postId}
  //      `);
  //      const post = await res.json();
  //      setPost(post)
  // };

  // useEffect(()=>{
  //   fetchData();
  // },[postId])
  // 의존성배열을 잘 활용하는게 중요하다....

return(
    <>
    <h3>UseCallback 공부2</h3>
    <div>조회한 포스트ID : {postId} </div>

    {post && <div>
      <div>id: {post.id}</div>
      <div>title: {post.title}</div>
      <div>body: {post.body}</div>
      </div>}
    </>
  )

}

// useMemo vs useCallback
// useMemo : 특정 값을 기억하여, 불필요한 연산을 방지한다.
// useCallback : 특정 함수를 기억하여, 불필요한 재선언을 방지한다.