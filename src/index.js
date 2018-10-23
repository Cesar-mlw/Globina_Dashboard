import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App.js'
const store = createStore(rootReducer)

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red
    }
})

console.log(store.getState());
render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
                <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
)