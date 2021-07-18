import React from 'react'
import ReactDOM from 'react-dom'
import List from './containers/List.js';
import Toolbar from './Components/Toolbar/Toolbar.jsx'

const App = () => {
    return <List />
}

ReactDOM.render(<App />, document.getElementById('root'));
