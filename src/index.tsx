import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



let a = {
name: "A",
age: 10,
address: {
city: "V",
country: "B"
}
};
console.log(a.address.city);

let users = [
  {
    name: "A",
    age: 10,
    address: {
      city: "V",
      country: "B"
    }
},
  {
    name: "C",
    age: 13,
    address: {
      city: "V",
      country: "B"
    }
},
]

console.log(users[0].address.country);
