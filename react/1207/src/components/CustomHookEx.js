import useToggle from"../hooks/useToggle"


export default function CustomHookEx(){

  // 기본값을 false로 넣어놔서 처음에 안보이게 시작하는것임~~
  const[isPopup,togglePopup]=useToggle(false)

  

  return(
    <>
    <h3>custom hook 공부</h3>
    {isPopup && <div>보여요</div>}
    <button onClick={togglePopup}>토글</button>
    </>
  )

}