import React from 'react';
import './test-tree.css'
import { Spec } from "./spec/spec";

export class TestTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        props.karmaService.subscribeForSpecs(props.browserId, (specs) => {
            this.setState({ specs: specs });
        });
    }

    render() {
        let keySoFar = '/tests';
        if (this.state.specs) {
            return (
                <div className="test-suite">
                    <Spec name="#DestinyRootTests#" specs={this.state.specs} browserId={this.props.browserId}
                          keySoFar={keySoFar}
                          key={keySoFar}
                          level={-1}
                          skipSelf={true}
                          karmaService={this.props.karmaService}> </Spec>
                </div>);
        } else {
            return <div></div>;
        }
    }
}