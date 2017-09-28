import React from 'react';
import { BrowserList } from "./components/browser-list/browser-list";
import { Navbar } from "react-bootstrap";


export default function Layout() {
    return (
        <div>

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Destiny Runner</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
            <BrowserList/>
        </div>
    );
}
