import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")



  function handleItemSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    })
  //   setItemName("")
  //   setItemCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setItemCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

