import './ShoppingItem.css';
import axios from "axios";

export default function ShoppingItem({listItem, getList}) {
    const deleteItem = () => {
        console.log(`Delete Item ID`, listItem.id);
        axios.delete('/items/' + listItem.id)
        .then(response => {
            getList();
        }).catch(error => {
            console.log('Error in DELETE', error);
        });
      }
    
    const itemPurchased = () => {
        console.log('Purchased',listItem.id )
        axios.put('/items/' + listItem.id)
        .then((result) => {
            getList();
            console.log(`success /items PUT`, listItem.id);
        }).catch((error) => {
            console.log(`ERROR in /items PUT`, error);
            
    })
    }
    return (<>
        <div className="shoppingCard">
            <h3>{listItem.name}  </h3>
            <p>{listItem.qty}   {listItem.unit}</p>
            {listItem.isPurchased
                ? <p>PURCHASED</p>
                : <><button onClick={() => deleteItem()}>Delete</button>
                    <button onClick={() => itemPurchased()}>Purchase</button> </>}
        </div>
    </>);
}