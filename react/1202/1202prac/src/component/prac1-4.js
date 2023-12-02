import { useState } from "react";

function PracFour () {
  const List = [
    // { id :  , name: "", text: ""},
  ]
  const [list, setList] = useState(List);
  const [newId, setNewId] = useState(1);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");

  const addList = () => {
    const newObj = { id: newId, name: newName, text : newText};
    const newList = list.concat(newObj);
    setList(newList);
    setNewId(newId+1)
    setNewName("");
    setNewText("");

  }


  return(
    <>
    <fieldset>
      작성자: <input type="text"
      value={newName}
      onChange={(e)=>{setNewName(e.target.value);
      }}
      /> 
      제목: <input type="text"
      value={newText}
      onChange={(e)=>{setNewText(e.target.value);
      }}
      />
      <button onClick={addList}>작성</button>
    </fieldset>
    <select>
      <option>작성자</option>
      
    </select>
    <input type="text" />
    <button>검색</button>
    <button>전체</button>
    <table border={1} width={300} cellSpacing={5}>
      <tr>
       <td>번호</td>
       <td>제목</td>
       <td>작성자</td>
      </tr>

        <tbody>
        {list.map((value) => {
          return (
           <tr key={value.id}>
            <td
            key={value.id}>

              
              {value.id}
              </td>
            
             <td>
             
              {value.name}
            </td>
            
            <td
            >{value.text}</td>
            </tr> 
          );
          
        })}
        </tbody>
      </table>
     
    </>
  )

}

export default PracFour;