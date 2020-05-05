// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// const name = 'Josh Perez';
// const element = <h1>Hello,{name}</h1>;
//
// class Clock extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {date:new Date()}
//     }
//     componentDidMount(){
//         this.timerID = setInterval(()=>{
//             this.tick()
//         },1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }
//
//     tick(){
//         this.setState({
//             date:new Date()
//         })
//     }
//
//     render(){
//         return (<div>
//             <h1>Hello,world</h1>
//             <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>);
//     }
// }
// ReactDOM.render(
//   <React.StrictMode>
//     {/*<App />*/}
//     <Clock/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
//
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 10 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// Store
const store = createStore(counter)
console.log(store,store.getState())
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
