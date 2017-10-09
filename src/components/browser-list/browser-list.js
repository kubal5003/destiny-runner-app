import React from 'react';
import { KarmaService } from "../../shared/karma-service";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";
import { Browser } from "../browser/browser";

export class BrowserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karmaService: props.karmaService
        };
    }

    render() {
        let browsers = this.state.browsers;
        let hasBrowsers = browsers && browsers.length > 0;
        if (hasBrowsers) {
            return (
                <Tabs id="browser-tabs">
                    {
                        browsers.map((b, i) => {
                            return (<Tab title={b.name} key={i} eventKey={i}>
                                <Browser instance={b} karmaService={this.state.karmaService}> </Browser>
                            </Tab>);
                        })
                    }
                </Tabs>
            );
        } else return (<div>No connected browsers yet</div> );
    }

    componentDidMount() {
        this.state.karmaService.connect((browsers) => this.setState({ browsers: browsers }));
    }
}