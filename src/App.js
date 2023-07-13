import { useEffect, useState } from "react"
import Cont1 from "./Cont1"
import Note from "./Note"
import List from "./List"
import 'bootstrap'
const getDatafromLS=()=>{
  const data = localStorage.getItem('listTodo');
  if(data){
    return JSON.parse(data);
  }
  else{
    return[]
  }
}
function App() {
  const [listTodo,setListTodo ]= useState(getDatafromLS());
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }
  useEffect(()=>{
    localStorage.setItem('listTodo',JSON.stringify(listTodo));
  },[listTodo])
  return (
    <div>
      <Cont1 addList={addList}/>
      <Note/>
      
      {listTodo.map((listItem,i)=>{
        return(
          <List key={i} item={listItem}/>
        )
      })}
    </div>
  )
}

export default App
