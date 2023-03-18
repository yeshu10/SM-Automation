// import axios from 'axios';
//mock API
let API_URL = 'https://5adc8779b80f490014fb883a.mockapi.io';
   export default function callApi(endpoint: any, method = 'GET') {
       return fetch(`${API_URL}/${endpoint}`,{   
       }).catch(err => {
           console.log(err);
       });
}



[
    {
        "title": "Small Soft Soap",
        "price": "775.00",
        "image": "http://loremflickr.com/640/480/abstract",
        "id": "11"
    },
    {
        "title": "Small Steel Chicken",
        "price": "826.00",
        "image": "http://loremflickr.com/640/480/transport",
        "id": "12"
    },
    {
        "title": "Ergonomic Wooden Gloves",
        "price": "403.00",
        "image": "http://loremflickr.com/640/480/city",
        "id": "14"
    },
    {
        "title": "Electronic Granite Shirt",
        "price": "542.00",
        "image": "http://loremflickr.com/640/480/food",
        "id": "15"
    },
    {
        "title": "Modern Rubber Shoes",
        "price": 123,
        "image": "213123",
        "id": "16",
        "name": "akjshdjka"
    },
    {
        "title": "Nodejs",
        "price": "1200",
        "image": "https://hoanguyenit.com/upload/images/creating-custom-middleware-in-reactredux.jpg",
        "id": "17"
    },
    {
        "title": "Creating Custom Middleware In React/Redux",
        "price": "123",
        "image": "https://hoanguyenit.com/upload/images/creating-custom-middleware-in-reactredux.jpg",
        "id": "22"
    },
    {
        "title": "React Redux Toolkit",
        "price": "10000",
        "image": "https://hoanguyenit.com/upload/images/creating-custom-middleware-in-reactredux.jpg",
        "id": "24"
    }
]