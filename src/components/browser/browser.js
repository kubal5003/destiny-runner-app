import React from 'react';
import { Badge, ProgressBar, Well } from "react-bootstrap";
import './browser.css'
import { TestTree } from "../test-tree/test-tree";

export class Browser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            karmaService: props.karmaService
        };
    }

    render() {
        let result = this.props.instance.lastResult
        let total = result.total;
        let skipped = result.skipped;
        let success = result.success;
        let failed = result.failed;

        return (
            <div className="test-execution-area">
                <Well className="overall-well" >
                    <div className="overall">
                        <div className="passed">Passed <Badge>{success}</Badge></div>
                        <div className="failed">Failed <Badge>{failed}</Badge></div>
                        <div className="skipped">Skipped <Badge>{skipped}</Badge></div>
                        <div className="total">Total <Badge>{total}</Badge></div>
                    </div>
                    <ProgressBar min={0} max={total}>
                        <ProgressBar striped bsStyle="success" now={success} max={total} key={1}/>
                        <ProgressBar striped bsStyle="danger" now={failed} max={total} key={3}/>
                        <ProgressBar striped bsStyle="info" now={skipped} max={total} key={2}/>
                    </ProgressBar>
                </Well>
                <TestTree browserId={this.props.instance.id} karmaService={this.props.karmaService}/>
            </div>
        );
    }
}