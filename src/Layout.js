import React from 'react';
import { BrowserList } from "./components/browser-list/browser-list";
import { AppBar } from 'react-toolbox/lib/app_bar';

export default function Layout() {
    return (
        <div>
            <AppBar title="Destiny Runner"/>

            <BrowserList/>
        </div>
    );
}
