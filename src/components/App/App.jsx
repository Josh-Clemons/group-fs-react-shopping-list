import React from 'react';
import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import axios from 'react';


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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
