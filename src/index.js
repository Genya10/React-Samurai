import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
   
 let rerender=(state)=>{
root.render(
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>     
);
}

rerender(store.getState());

store.subscribe(rerender);
