import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import rootReducer from '../reducers/RootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Tavern from './Tavern/Tavern';

const store = createStore(rootReducer);
console.log(store.getState());

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Tavern />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));