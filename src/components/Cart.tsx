import React, {useState} from 'react'
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';

const Cart = () => {
  const [items, setItems] = useState<any>([]);

  function addItem(name: string) {
    setItems((currList: any[]) => {
      console.log(currList);
      return [...currList, 
        {id: currList.length, name: name, completed: false}
      ]
    })
  }

  

  return (
    <div>
      <NewItemForm  
        addItem={addItem}
      />
      <ItemList />
    </div>
  )
}

export default Cart
