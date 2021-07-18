import React from 'react'
import ReactDOM from 'react-dom'
import List from './containers/List.js';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div className = 'container-fluid'>
            <h1 > movieList </h1>
            <nav className = 'navbar stickytop navbar-light bg-dark'>   
                <h1 className= 'navbar-brand text-light'> movieList </h1> 
            </nav>
            <List />
        </div> 
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
