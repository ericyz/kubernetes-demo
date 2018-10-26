import ReactDOM from 'react-dom'
import React from 'react'
import App  from './components/App'

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(React.createElement(App), document.getElementById("app"))
})