import React from 'react';
import './assets/css/style.css';
import {TodoList} from "./components/TodoList";
import {Navbar, TabContainer} from "react-bootstrap";

const App = () => {

    return (
        <div className="App">
            <Navbar >
                <TabContainer>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./assets/images/"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </TabContainer>
            </Navbar>
            <TodoList/>
        </div>
    );
}

export default App;
