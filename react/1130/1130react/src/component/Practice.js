// import ColorSelect from './component/ColorSelect'; 

function Practice () {
  return (
    <>
    <label>과일</label>
    <select>
      <option>사과</option>
      <option>바나나</option>
      <option>오렌지</option>
      <option>초록</option>
    </select>
 
    {/* <ColorSelect mode="배경"/> */}
    {/* <ColorSelect mode="글자"/>  */}
    <label> 내용</label>
    <input type="text"></input>
    <img src="/apple.jpg"/>

    </>
  )
}

export default Practice;