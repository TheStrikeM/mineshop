import './App.css';
import React from 'react';
import { Cart, Main } from './pages';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { fetchItems } from './redux/actions/cards';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Действие при старте приложения запущено.")
    dispatch(fetchItems());
  }, []);

  return (
    <Router>

      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
      
    </Router>
  );
}

export default App;
