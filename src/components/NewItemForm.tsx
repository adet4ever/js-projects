import React, { useState } from 'react'

const NewItemForm = (props: any) => {
  const [newItem, setNewItem] = useState("");
  const[itemList, setItemList] = useState<any>([]);


  function handleItemChange(e: any) {
    e.preventDefault();
    setNewItem(e.target.value);
  }

  function handleClick(e: any) {
    e.preventDefault();
    props.addItem();
    setNewItem("");
  }

  return (
    <>
      <h2>Binding onChange event</h2>
      <input type="text" value={newItem} onChange={handleItemChange}></input>
      <span>show item name: {newItem}</span>
      <button className="btn btn-primary" onClick={(e) => handleClick(e)}>Add</button>
    </>
  )
}

export default NewItemForm
