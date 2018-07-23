import React from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
    faThumbtack, faGlasses, faCheck, 
    faCaretDown, faTrash, faSearch 
} from '@fortawesome/free-solid-svg-icons'

import MainPage from './pages/MainPage'
import SearchPage from './pages/SearchPage'

const icons = [faThumbtack, faGlasses, faCheck, faCaretDown, faTrash, faSearch]
icons.forEach(icon => library.add(icon))

injectGlobal`  
    html, body, .root {
        box-sizing: border-box;
        height: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        line-height: 1.5;
    }
    
    body, .app {        
        background-color: #494978;
        font-family: 'Quicksand', serif;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
`

export default function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={MainPage}
                    />
                <Route
                    exact
                    path="/search"
                    component={SearchPage}
                    />
            </Switch>
        </Router>
    )
}