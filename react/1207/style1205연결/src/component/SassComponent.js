import "../styles/origin.scss"

function SassComponent (){
  return(
    <>
         <div className="origin-sass"> 
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box green"></div>
        <div className="box yellow"></div>
     </div>

     <div className="scss-parents">
      안녕하세요?
      <ul>
        <li>hello</li>
      </ul>
     </div>

     
     
     <div className="box1"></div>
     <div className="box2"></div>

     <button className="btn">일반버튼</button>
     <button className="btn-primary">강조버튼</button>

    </>
  )
}

export default SassComponent