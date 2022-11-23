import axios from 'axios';
import {useState} from 'react'


// need to pass me prop for getList



function addItemForm(props) {

    const [item, setItem] = useState('');
    const [qty, setQty] = useState('');
    const [unit, setUnit] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        if (item && qty && unit) {
            addItem();
        } else {
            alert('Complete all fields!');
        };
    }

    const addItem = () => {
        axios.
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add an Item</h2>

                <label >Item: </label>
                <input
                    id="itemInput"
                    type="text"
                    value={item}
                    onChange={(event) => setItem(event.target.value)}
                />
                <br/>
                <label >Quantity: </label>
                <input 
                    id="qtyInput"
                    type="number"
                    value={qty}
                    onChange={(event) => setQty(event.target.value)}
                />

                <label >Unit: </label>
                <input 
                    id="unitInput"
                    type="text"
                    value={unit}
                    onChange={(event) => setUnit(event.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )

}

export default addItemForm;