import ShoppingItem from '../ShoppingItem/ShoppingItem';
import axios from 'axios';
import './List.css';

export default function List(props){

  const resetList = () => {
    axios.put('/items/reset').then(response => {
      console.log('List Reset:', response);
      props.getList();
    }).catch(error => {
      alert('Error with List.jsx resetList function:' + error);
    });
  }

  const emptyDatabase = () => {
    axios.delete('/items/deleteall').then(response => {
      console.log('List Deleted:', response);
      props.getList();
    }).catch(error => {
      alert('Error with List.jsx emptyDatabase function:' + error);
    });
  }

  return (
    <div className='listContent'>
      <h2>Shopping List</h2>
      <br />
      <button onClick={resetList}>Reset</button>
      <button onClick={emptyDatabase}>Clear</button>
      <div className="shoppingContainer">
        {props.shoppingList.map(listItem => (
          <ShoppingItem key={listItem.id} listItem={listItem}/>
        ))}
      </div>

    </div>
  )
}