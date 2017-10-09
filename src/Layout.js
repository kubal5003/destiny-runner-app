import React from 'react';
import { BrowserList } from "./components/browser-list/browser-list";
import { MenuItem, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { KarmaService } from "./shared/karma-service";



export class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            karmaService : new KarmaService()
        }
    }
    render() {
        return (<div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Destiny Runner</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown eventKey={3} title="Karma" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} onClick={this.startKarma}>Start</MenuItem>
                        <MenuItem eventKey={3.2}>Stop</MenuItem>
                        <MenuItem eventKey={3.3} onClick={this.refreshFiles}>Refresh files</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <BrowserList karmaService={this.state.karmaService}/>
        </div>);
    }

    startKarma = () => {
        let start = this.state.karmaService.start;
        start && start();
    }

    refreshFiles = () => {
        let refresh = this.state.karmaService.refresh;
        refresh && refresh();
    }
}