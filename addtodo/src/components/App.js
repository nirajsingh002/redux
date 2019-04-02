import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import '../css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                Redux Example
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}


export default App;