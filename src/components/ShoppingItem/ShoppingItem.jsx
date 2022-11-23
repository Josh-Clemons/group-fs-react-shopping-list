import './ShoppingItem.css';

export default function ShoppingItem({listItem}) {

    return (<>
        <div className="shoppingCard">
            <h3>{listItem.name}  </h3>
            <p>{listItem.qty}   {listItem.unit}</p>
            {listItem.isPurchased
                ? <p>PURCHASED</p>
                : <><button onClick={() => deleteItem(newItem)}>Delete</button>
                    <button onClick={() => itemPurchased(newItem)}>Purchase</button> </>}
        </div>
    </>);
}