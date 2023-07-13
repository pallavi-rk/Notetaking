import React, { useState } from 'react'
import './Cont1.css'
import { Modal} from "reactstrap";
function Cont1(props) {
  const [modal, setmodal] = useState(false)
  const [inputText, setInputText] = useState('');
  const [selectedElement, setSelectedElement] = useState('');
  const handleClick = (element) => {
    setSelectedElement(element);
    console.log(element)
  };
  return (
    <div>

      <Modal className='modalname' 
        isOpen={modal}
        toggle={() => setmodal(!modal)}
      >
        <h1 className='modalhead'>Create New Notes group</h1>
        <h1 className='modalsubhead1'>Group Name</h1>
        <input 
        type='text' 
        id='name' 
        className='groupname' 
        onChange={e=>{setInputText(e.target.value)}}
        value={inputText}
        >
        </input>
        <h1 className='modalsubhead2'>Choose colour</h1>
        <img className='ellipse1' src='Ellipse11.png' onClick={handleClick}></img>
        <img className='ellipse2' src='Ellipse18.png' onClick={handleClick}></img>
        <img className='ellipse3' src='Ellipse19.png' onClick={handleClick}></img>
        <img className='ellipse4' src='Ellipse20.png' onClick={handleClick}></img>
        <img className='ellipse5' src='Ellipse21.png' onClick={handleClick}></img>
        <img className='ellipse6' src='Ellipse22.png' onClick={handleClick}></img>
        <button className='create' onClick={()=>{
          props.addList(inputText)
          setInputText("")
          
          }}>Create</button>
        
      </Modal>
      <h1 className='notehead'>Pocket Notes</h1>
      <button className='btn1' onClick={() => setmodal(true)}>+ Create Notes group</button>

    </div>
  )
}

export default Cont1

