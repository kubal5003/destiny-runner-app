import React from 'react';
import { KarmaService } from "../../shared/karma-service";
import { Tabs, Tab } from "react-toolbox/src/components/tabs";


export class BrowserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    render() {
        return (
            <Tabs index={this.state.index} onChange={this.handleTabChange} inverse>
                {
                    this.state.browsers && this.state.browsers.map((b, i) => {
                        return <Tab label={b.name}>asdasdadaedwewedwerwerwerwrwerwrwerwerwe</Tab>;
                    })
                }
                <Tab label="Static tab">dasdadasd<br/><br/><br/><br/></Tab>

            </Tabs>
        );
    }

    componentDidMount() {
        let karmaService = new KarmaService();
        karmaService.connect((browsers) => this.setState({ browsers: browsers }));
    }

    handleTabChange() {

    }
}