import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  
  const [allItems, setAllItems] = useState([...items])
  function handleItemSubmit(e){
    const newItem = e
    const newItemArray = [...items, newItem]
    setAllItems(newItemArray)
  }

  function handleSearchItems(event){
    setSearch(event.target.value)
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const searchedItems = allItems.filter((item) => {
    if (search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const itemsToDisplay = searchedItems.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

// need to set new item from input then add it to allItems, this cant be done in the same function 


  
  return (
    <div className="ShoppingList">
      {/* =================================================================== */}

      <ItemForm onItemFormSubmit={handleItemSubmit}/>

      {/* =================================================================== */}
      <Filter search={search} onSearchChange={handleSearchItems} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


/* 
the text field and a state is now connected now i need to connect the state with what is shown
simialar to how the categoyr change works
*/