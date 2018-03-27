import React from 'react'
import ReactDOM from 'react-dom'
import Apps from './Apps'

ReactDOM.render(<Apps />, document.querySelector('#root'));

// Berfungsi untuk menghapus Komponen dari DOM -- latihan_5.js
/*
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
}, 8000)
*/