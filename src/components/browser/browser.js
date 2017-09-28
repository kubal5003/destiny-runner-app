import React from 'react';
import { Badge, Well } from "react-bootstrap";
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
        return (
            <div className="test-execution-area">
                <Well className="overall">
                    <div className="passed">Passed <Badge>{this.props.instance.lastResult.success}</Badge></div>
                    <div className="failed">Failed <Badge>{this.props.instance.lastResult.failed}</Badge></div>
                    <div className="skipped">Skipped <Badge>{this.props.instance.lastResult.skipped}</Badge></div>
                    <div className="total">Total <Badge>{this.props.instance.lastResult.total}</Badge></div>
                    <div>Execution time: {this.props.instance.lastResult.totalTime}</div>
                </Well>
                <TestTree browserId={this.props.instance.id} karmaService={this.props.karmaService}/>
            </div>
        );
    }
}