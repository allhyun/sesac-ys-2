import { useState} from "react"
function Pracmap () {
  const information = [
    {name:"코디" ,email:"codi@gmail.com" },
    {name:"윤소희" ,email:"ysh@gmail.com" },
  ];
  const [list,setList] = useState(information);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const addinfo=()=>{
    const newIf= { name:newName , email: newEmail }
    const newList = list.concat(newIf);
    setList(newList)
    setNewName("")
    setNewEmail("")
  }

  const deleteProduct = (name) => {
    const newList = list.filter((value) =>{return value.name != name})
    setList(newList);
  }; 
  return (
    <>
    <input type =" text"
    value={newName}
    onChange={(e) => {
      setNewName(e.target.value);
    }}
  />
    <input type = "text"
    value={newEmail}
    onChange={(e) => {
      setNewEmail(e.target.value);
    }} />
    <button onClick={addinfo}>등록</button>

    <ul>
        {list.map((value, index) => {
          return (
            <li key={index}
            onDoubleClick={()=>{
              deleteProduct(value.name);
            }} >
              {value.name}  :{value.email}
            </li>
          );
        })}
    </ul>



    </>
  )
}

export default Pracmap;