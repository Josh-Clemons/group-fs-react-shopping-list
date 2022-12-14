import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import axios from 'axios';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import List from '../List/List.jsx';



function App() {

    let[shoppingList, setShoppingList] = useState([]);

    // Load shoppingList
    useEffect(() => {
        getList()
    }, [])

    // GET call for list from Database
    const getList = () => {
        axios.get('/items').then(response => {
            setShoppingList(response.data);
        }).catch(error => {
            alert('Error with App.jsx GET:' + error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <AddItemForm getList={getList} />
                <List shoppingList={shoppingList} getList={getList} />
            </main>
        </div>
    );
}

export default App;
