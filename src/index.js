import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App.js'


const store = createStore(rootReducer)

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: red
    }
})

console.log(store.getState());
render(
    <Provider store={store}>
        <MuiThemeProvider theme={}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)