import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import Home from '../pages/Home'
//import Routes from "./routes"
import store from './store'
import { GlobalStyle, AppStyle } from './globalStyle'
import { Provider } from 'react-redux'



class App extends React.Component {
    render() {
        return (

                <Provider store={store}>
                    <GlobalStyle />
                    <Home>
                    </Home>
                </Provider>
        )
    }
}

const rootElement = document.getElementById('app')
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement)
} else {
    render(<App />, rootElement);
}
