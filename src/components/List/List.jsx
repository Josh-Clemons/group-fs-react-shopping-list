import ShoppingItem from '../ShoppingItem/ShoppingItem';

export default function List({shoppingList}){




  return (
    <div>
      <h2>Shopping List</h2>
      <br />
      <button>Reset</button>
      <button>Clear</button>

      {shoppingList.map(listItem => (
        <ShoppingItem listItem={listItem}/>
      ))}

    </div>
  )
}